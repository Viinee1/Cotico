import React from 'react';
import { Container, PetContainer, PetName, PetImage, ProgressContainer, Progress, ProgressBar, ProgressText, InfoText, InfoCard, BackButton, DescriptionText, GradientBackground } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export const PetsDetalhes = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <GradientBackground>
    <Container>
      <BackButton onPress={handleBackPress}>
        <Feather name="arrow-left" size={24} color="white" />
      </BackButton>

      <PetContainer>
        <PetImage source={require('../../assets/cap1.png')} />
        <InfoCard>
          <PetName>Capinxo lvl.3</PetName>
          <ProgressContainer>
            <ProgressBar>
              <Progress width="62%" />
            </ProgressBar>
            <ProgressText>Progresso: 20 / 32</ProgressText>
          </ProgressContainer>
          <InfoText>Informações</InfoText>
          <DescriptionText>
            O Capinxo é uma criatura tranquila e amigável. Adora explorar lixeiras em busca de materiais recicláveis. Embora sua aparência sugira uma vida simples, ele tem um coração ecológico e sempre busca melhorar o meio ambiente.
          </DescriptionText>
        </InfoCard>
      </PetContainer>
    </Container>
    </GradientBackground>
  );
};

export default PetsDetalhes;
