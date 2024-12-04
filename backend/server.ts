import express, { Request, Response } from 'express';
import axios from 'axios';
import sharp from 'sharp';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(cors());

const bodyParserOptions = {
  json: { limit: '50mb', extended: true },
  urlencoded: { limit: '50mb', extended: true },
};

app.use(bodyParser.json(bodyParserOptions.json));
app.use(bodyParser.urlencoded(bodyParserOptions.urlencoded));

const PREDICTION_ENDPOINT = process.env.PREDICTION_ENDPOINT || '';
const PREDICTION_KEY = process.env.PREDICTION_KEY || '';

if (!PREDICTION_ENDPOINT || !PREDICTION_KEY) {
  console.error('Configure as variáveis PREDICTION_ENDPOINT e PREDICTION_KEY no arquivo .env');
  process.exit(1);
}

app.post('/analyze-image', async (req: Request, res: Response): Promise<void> => {
  try {
    const { imageBase64 } = req.body;

    if (!imageBase64) {
      res.status(400).json({ error: 'Imagem em Base64 é necessária!' });
      return;
    }

    const imageBuffer = Buffer.from(imageBase64, 'base64');

    const optimizedBuffer = await sharp(imageBuffer)
      .resize({ width: 800 })
      .jpeg({ quality: 80 })
      .toBuffer();

    const response = await axios.post(PREDICTION_ENDPOINT, optimizedBuffer, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Prediction-Key': PREDICTION_KEY,
      },
    });

    const predictions = response.data.predictions;
    const bestPrediction = predictions.reduce((max: any, prediction: any) =>
      prediction.probability > max.probability ? prediction : max
    );

    res.json(bestPrediction);
  } catch (error: any) {
    console.error('Erro ao processar a imagem:', error.message, error.response?.data || error);
    res.status(500).json({ error: 'Erro ao processar a imagem no servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
