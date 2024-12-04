import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useCameraPermissions, CameraView } from 'expo-camera';
import axios from 'axios';
import { ButtonCameraImage, ButtonCameraImageText, ButtonGaleryImage, ButtonGaleryImageText, ButtonQRCode, ButtonQRCodeText, Container, GradientBackground, ImageContainer, Result, Title } from './styles';
import { FIREBASE_AUTH, FIRESTORE } from '../../firebaseConfig';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';

export const Scanner = () => {
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [qrButtonVisible, setQrButtonVisible] = useState<boolean>(false); 
  
    const [permission, requestPermission] = useCameraPermissions();
    const [cameraVisible, setCameraVisible] = useState(false);
    const [scanned, setScanned] = useState(false);
  
    const incrementRecycledItems = async () => {
      try {
        const user = FIREBASE_AUTH.currentUser;
        if (user) {
          const userDocRef = doc(FIRESTORE, 'users', user.uid);
  
          const userDoc = await getDoc(userDocRef);
  
          if (userDoc.exists()) {
            await updateDoc(userDocRef, {
              recycledItems: increment(1),
            });
          } else {
            await setDoc(userDocRef, {
              recycledItems: 1,
            });
          }
        }
      } catch (error) {
        console.error('Erro ao atualizar itens reciclados:', error);
      }
    };
  
    const handleOpenCameraForQR = async () => {
      if (!permission || !permission.granted) {
        const { status } = await requestPermission();
        if (status !== 'granted') {
          Alert.alert(
            'Permissão negada',
            'Precisamos da permissão da câmera para usar esta funcionalidade.'
          );
          return;
        }
      }
      setCameraVisible(true);
      setImageUri(null);
    };
  
    const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
      setScanned(true);
      setCameraVisible(false);
      Alert.alert(
        `Código ${type} Scaneado`,
        `Dados: ${data}`,
        [{ text: 'OK', onPress: () => setScanned(false) }],
        { cancelable: false }
      );
    };
  
    const selectImageFromGallery = async () => {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        Alert.alert('Permissão Necessária', 'Você precisa permitir acesso à galeria para continuar.');
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        quality: 1,
      });
  
      if (!result.canceled) {
        processImage(result.assets[0].uri);
      }
    };
  
    const captureImageWithCamera = async () => {
      const permission = await ImagePicker.requestCameraPermissionsAsync();
      if (!permission.granted) {
        Alert.alert('Permissão Necessária', 'Você precisa permitir acesso à câmera para continuar.');
        return;
      }
  
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        quality: 1,
      });
  
      if (!result.canceled) {
        processImage(result.assets[0].uri);
      }
    };
  
    const processImage = async (uri: string) => {
      try {
        setLoading(true);
  
        const manipulatedImage = await ImageManipulator.manipulateAsync(
          uri,
          [{ resize: { width: 1024 } }],
          { compress: 0.6, format: ImageManipulator.SaveFormat.JPEG }
        );
  
        setImageUri(manipulatedImage.uri);
  
        const base64 = await convertUriToBase64(manipulatedImage.uri);
        if (base64) analyzeImage(base64);
      } catch (error) {
        console.error('Erro ao processar a imagem:', error);
        Alert.alert('Erro', 'Não foi possível processar a imagem.');
      } finally {
        setLoading(false);
      }
    };
  
    const convertUriToBase64 = async (uri: string): Promise<string | null> => {
      try {
        const response = await fetch(uri);
        const blob = await response.blob();
  
        return await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve((reader.result as string).replace(/^data:image\/\w+;base64,/, ''));
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error('Erro ao converter URI para Base64:', error);
        return null;
      }
    };
  
    const analyzeImage = async (base64: string) => {
      try {
        setLoading(true);
        const response = await axios.post('http://192.168.0.10:3000/analyze-image', {
          imageBase64: base64,
        });
        const bestPrediction = response.data;
  
        if (bestPrediction && bestPrediction.probability > 0.8) {
          setQrButtonVisible(true);
          await incrementRecycledItems();
        } else {
          setQrButtonVisible(false);
        }
  
        setResult(
          `Tag: ${bestPrediction.tagName}\nConfiança: ${(bestPrediction.probability * 100).toFixed(2)}%`
        );
      } catch (error: any) {
        console.error('Erro ao enviar a imagem:', error.message);
        setResult('Erro ao processar a imagem.');
        setQrButtonVisible(false);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <GradientBackground>
        <Container>
          <Title>Scanner de Imagens</Title>
          <View style={styles.buttonContainer}>
            <ButtonCameraImage onPress={captureImageWithCamera}>
              <ButtonCameraImageText>Abrir Câmera</ButtonCameraImageText>
            </ButtonCameraImage>
            <ButtonGaleryImage onPress={selectImageFromGallery}>
              <ButtonGaleryImageText>Selecionar da Galeria</ButtonGaleryImageText>
            </ButtonGaleryImage>
          </View>
          {qrButtonVisible && (
            <View style={styles.qrButtonContainer}>
              <ButtonQRCode onPress={handleOpenCameraForQR}>
                <ButtonQRCodeText>Escanear QR Code</ButtonQRCodeText>
              </ButtonQRCode>
            </View>
          )}
          {cameraVisible && (
            <View style={styles.fullscreenCamera}>
              <CameraView
                style={styles.camera}
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
              >
                <View style={styles.layerContainer}>
                  <View style={styles.layerTop} />
                  <View style={styles.layerCenter}>
                    <View style={styles.layerLeft} />
                    <View style={styles.focused} />
                    <View style={styles.layerRight} />
                  </View>
                  <View style={styles.layerBottom} />
                </View>
                <View style={styles.closeButtonContainer}>
                  <Button
                    title="Fechar Câmera"
                    onPress={() => setCameraVisible(false)}
                    color="#FF0000"
                  />
                </View>
              </CameraView>
            </View>
          )}
          {!cameraVisible && imageUri && <ImageContainer source={{ uri: imageUri }} />}
          {!cameraVisible && result && <Result>{result}</Result>}
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </Container>
      </GradientBackground>
    );
  };
  
  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 180,
      marginBottom: 20,
      alignItems: 'center',
    },
    qrButtonContainer: {
      marginTop: 120,
      width: '100%',
      alignItems: 'center',
    },
    fullscreenCamera: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#000',
    },
    camera: {
      flex: 1,
    },
    layerContainer: {
      flex: 1,
    },
    layerTop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    layerCenter: {
      flexDirection: 'row',
    },
    layerLeft: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    focused: {
      width: 200,
      height: 200,
      borderWidth: 2,
      borderColor: '#00FF00',
    },
    layerRight: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    layerBottom: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    closeButtonContainer: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20,
      borderRadius: 10,
    },
    result: {
      marginTop: 20,
      fontSize: 16,
      color: '#ffffff',
      textAlign: 'center',
    },
  });
  
  export default Scanner;
