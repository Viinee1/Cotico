import React from 'react';
import { FlatList } from 'react-native';
import * as S from './styles';

const data = [
  { id: '1', name: 'nome1', points: 1624, image: require('../../assets/cap1.png') },
  { id: '2', name: 'nome2', points: 1213, image: require('../../assets/cap1.png') },
  { id: '3', name: 'nome3', points: 1013, image: require('../../assets/cap1.png') },
  { id: '4', name: 'nome4', points: 905, image: require('../../assets/cap1.png') },
  { id: '5', name: 'nome5', points: 905, image: require('../../assets/cap1.png') },
];

export const Rankings = () => {
  return (
    <S.GradientBackground>
    <S.Container>
      <S.Title>Rankings</S.Title>
      <S.TabsContainer>
        <S.TabButton selected={true} onPress={() => {}} title="teste">
          <S.TabButtonText>Geral</S.TabButtonText>
        </S.TabButton>
        <S.TabButton selected={false} onPress={() => {}} title="teste">
          <S.TabButtonText>Amigos</S.TabButtonText>
        </S.TabButton>
      </S.TabsContainer>
    <S.Top3Container>
        {data.slice(0, 3).map((item, index) => (
        <S.TopItem key={item.id} isFirst={index === 0}>
         <S.ProfileImageContainer rank={index + 1}>
          <S.ProfileImage source={item.image} />
           </S.ProfileImageContainer>
        <S.RankBadgeText>{index + 1}º</S.RankBadgeText>
        <S.PlayerName>{item.name}</S.PlayerName> 
        <S.Points>{item.points} pts.</S.Points>
        </S.TopItem>
     ))}
    </S.Top3Container>
      <S.ListContainer>
        <FlatList
          data={data.slice(3)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <S.ListItem>
              <S.ProfileImageSmall source={item.image} />
              <S.TextContainer>
                <S.ListItemText>{item.name}</S.ListItemText>
                <S.Points>{item.points} pts.</S.Points>
              </S.TextContainer>
            </S.ListItem>
          )}
        />
      </S.ListContainer>
    </S.Container>
    </S.GradientBackground>
  );
};

export default Rankings;
