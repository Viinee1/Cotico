import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';

export const GradientBackground = styled(LinearGradient).attrs(() => ({
  colors: ['#00001a', '#00004d', '#000066', '#000080'],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
  locations: [0, 0.34, 0.67, 1],
}))`
  flex: 1;
`;

export const Container = styled(SafeAreaView)`
 flex: 1;
 align-items: center;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  margin-top: 25px;
`;

export const PerfilImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 4px;
  border-color: white;
`;

export const PerfilNome = styled.Text`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const InstituicaoText = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  color: #ccc;
`;

export const RecicladorStatus = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #00ff7f;
  margin-bottom: 15px;
`;

export const PerfilInfoContainer = styled.View`
  align-items: center;
`;

export const InfoLabel = styled.Text`
  font-size: 16px;
  color: white;
  text-align: center;
`;

export const InfoContainer = styled.View`
  width: 93%;
  height: 63%;
  bottom: 0;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  border-radius: 20px;
  background-color: #020617;
`;

export const InfoRow = styled.View`
  align-items: center;
`;

export const InfoValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const ButtonExit = styled(TouchableOpacity)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    max-width: 70%;
    min-width: 70%;

    background-color: #660022;

    border-radius: 6px;

    justify-content: center;
    align-items: center;
    margin-top: 10px;

`;

export const ButtonExitText = styled.Text`
    font-size: 16px;
    color: white;
    text-align: center;
`;