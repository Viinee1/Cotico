import React, { useEffect, useState } from 'react';
import {
  Container,
  HeaderContainer,
  PerfilImage,
  PerfilInfoContainer,
  PerfilNome,
  RecicladorStatus,
  InstituicaoText,
  InfoRow,
  InfoValue,
  InfoLabel,
  InfoContainer,
  ButtonExit,
  ButtonExitText,
} from './styles';
import { FIREBASE_AUTH, FIRESTORE } from '../../firebaseConfig';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { GradientBackground } from './styles';

export function Perfil() {
  const [email, setEmail] = useState<string | null>(null);
  const [recycledItems, setRecycledItems] = useState<number>(0);
  const [coticosObtained, setCoticosObtained] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);

  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;

    if (user) {
      setEmail(user.email);

      const fetchCoticos = async () => {
        try {
          const coticosCollection = collection(FIRESTORE, `users/${user.uid}/coticos`);
          const coticosSnapshot = await getDocs(coticosCollection);
          setCoticosObtained(coticosSnapshot.size);
        } catch (error) {
          console.error('Erro ao buscar Coticos:', error);
        }
      };

      const fetchRecycledItems = async () => {
        try {
          const userDocRef = doc(FIRESTORE, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const data = userDoc.data();
            setRecycledItems(data.recycledItems || 0);
          } else {
            console.warn('Documento do usuário não encontrado.');
            setRecycledItems(0);
          }
        } catch (error) {
          console.error('Erro ao buscar itens reciclados:', error);
        }
      };

      fetchCoticos();
      fetchRecycledItems();
    }
  }, []);

  useEffect(() => {
    setTotalPoints(recycledItems + coticosObtained);
  }, [recycledItems, coticosObtained]);

  return (
    <GradientBackground>
      <Container>
        <HeaderContainer>
          <PerfilImage source={require('../../assets/cap1.png')} />
          <PerfilNome>{email || 'Usuário Desconhecido'}</PerfilNome>
          <RecicladorStatus>Reciclador Mestre</RecicladorStatus>
        </HeaderContainer>

        <InfoContainer>
          <InfoRow>
            <InfoLabel>Itens Reciclados</InfoLabel>
            <InfoValue>{recycledItems}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Pets Obtidos</InfoLabel>
            <InfoValue>{coticosObtained}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Total de Pontos</InfoLabel>
            <InfoValue>{totalPoints}</InfoValue>
          </InfoRow>
        </InfoContainer>

        <PerfilInfoContainer>
          <ButtonExit>
            <ButtonExitText>Sair</ButtonExitText>
          </ButtonExit>
        </PerfilInfoContainer>

        
      </Container>
    </GradientBackground>
  );
}
