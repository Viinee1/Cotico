import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH, FIRESTORE } from '../../firebaseConfig';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { Image } from 'expo-image';
import { AddCoticoButton, AddCoticoText, Container, CoticoContainer, CoticoGradient, GradientBackground, LevelText, Title } from '../Pets/styles';

type Cotico = {
  id: string;
  level?: number;
  image?: string;
};

export const Pets = React.memo(() => {
  const [coticos, setCoticos] = useState<Cotico[]>([]);
  const navigation = useNavigation();
  const user = FIREBASE_AUTH.currentUser;

  useEffect(() => {
    if (user) {
      const coticosCollection = collection(FIRESTORE, `users/${user.uid}/coticos`);
      const unsubscribe = onSnapshot(coticosCollection, (snapshot) => {
        const coticosList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Cotico[];
        setCoticos(coticosList);
      });

      return () => unsubscribe();
    }
  }, [user]);

  const addCotico = useCallback(async () => {
    if (user) {
      try {
        const coticosCollection = collection(FIRESTORE, `users/${user.uid}/coticos`);
        await addDoc(coticosCollection, {
          level: 1,
          image: 'https://imgur.com/QlTNsru.png',
        });
        alert("Cotico adicionado com sucesso!");
      } catch (error) {
        console.error("Erro ao adicionar Cotico:", error);
        alert("Erro ao adicionar Cotico. Verifique as permissões e tente novamente.");
      }
    } else {
      alert("Usuário não autenticado!");
    }
  }, [user]);

  const renderCotico = useCallback(({ item }: { item: Cotico }) => (
    <CoticoContainer onPress={() => navigation.navigate('petsDetalhes', { id: item.id })}>
      <CoticoGradient>
      <Image
        source={{ uri: item.image || 'https://imgur.com/QlTNsru.png' }}
        style={{ width: 70, height: 70, borderRadius: 10 }}
        placeholder={require('../../assets/cap1.png')}
        cachePolicy="memory-disk"
      />
      <LevelText>Lv. {item.level ?? 1}</LevelText>
      </CoticoGradient>
    </CoticoContainer>
  ), [navigation]);

  return (
    <GradientBackground>
    <Container>
      <Title>Seus Coticos</Title>
      <FlatList
        data={coticos}
        renderItem={renderCotico}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={{ alignItems: 'center' }}
        initialNumToRender={6}
        windowSize={10}
        maxToRenderPerBatch={3}
        updateCellsBatchingPeriod={100}
      />
      <AddCoticoButton onPress={addCotico}>
        <AddCoticoText>Adicionar Cotico</AddCoticoText>
      </AddCoticoButton>
    </Container>
    </GradientBackground>
  );
});

export default Pets;
