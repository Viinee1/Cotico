import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const GradientBackground = styled(LinearGradient).attrs(() => ({
  colors: ['#00001a', '#00004d', '#000066', '#000080'],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
  locations: [0, 0.34, 0.67, 1],
}))`
  flex: 1;
`;

interface TabButtonProps {
    selected: boolean;
    title: string;
    onPress: () => void;
}

interface ProfileImageContainerProps {
    rank: number;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
`;

export const TabButton = styled.TouchableOpacity<TabButtonProps>`
  background-color: ${(props) => (props.selected ? '#1b1c25' : '#0c0d16')};
  padding: 10px 20px;
  border-radius: 10px;
`;

export const TabButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const Top3Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end; 
  margin-bottom: 16px;
`;

export const TopItem = styled.View<{ isFirst: boolean }>`
  align-items: center;
  width: ${(props) => (props.isFirst ? '120px' : '100px')}; /* Primeiro lugar maior */
  margin-top: ${(props) => (props.isFirst ? '0' : '20px')}; /* Outros jogadores mais baixos */
`;

export const ProfileImageContainer = styled.View<ProfileImageContainerProps>`
  width: ${(props) => (props.rank === 1 ? '90px' : '70px')}; /* Tamanho do círculo para o primeiro lugar */
  height: ${(props) => (props.rank === 1 ? '90px' : '70px')};
  border-radius: ${(props) => (props.rank === 1 ? '45px' : '35px')};
  background-color: ${(props) =>
    props.rank === 1 ? '#f6c200' : props.rank === 2 ? '#c0c0c0' : '#cd7f32'};
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 80%;  /* Imagem ajustada para caber dentro do círculo */
  height: 80%;
  border-radius: 50px;
`;

export const RankBadge = styled.View<ProfileImageContainerProps>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) =>
    props.rank === 1 ? '#f6c200' : props.rank === 2 ? '#c0c0c0' : '#cd7f32'};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const RankBadgeText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const Points = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const ListContainer = styled.View`
  margin-top: 16px;
  flex: 1;
`;

export const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #1b1c25;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 10px;
`;

export const ProfileImageSmall = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const ListItemText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const PlayerName = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;