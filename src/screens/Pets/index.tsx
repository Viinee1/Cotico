import React from 'react';
import { FlatList } from 'react-native';
import { Container, CoticoContainer, CoticoImage, LevelText, Title } from './styles';

type Cotico = {
  id: string;
  level?: number;
  image?: any;
};

// Exemplo de dados
const coticos: Cotico[] = [
  { id: '1', level: 3, image: require('../../assets/cap1.png') },
  { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' },
  { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' },
];

const Pets = () => {
  // Especificando o tipo do item no parâmetro da função
  const renderCotico = ({ item }: { item: Cotico }) => (
    <CoticoContainer>
      {item.image ? (
        <>
          <CoticoImage source={item.image} />
          <LevelText>Lv. {item.level}</LevelText>
        </>
      ) : (
        <LevelText></LevelText>
      )}
    </CoticoContainer>
  );

  return (
    <Container>
      <Title>Seus Coticos</Title>
      <FlatList
        data={coticos}
        renderItem={renderCotico}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </Container>
  );
};

export default Pets;
