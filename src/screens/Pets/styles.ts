import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";


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
  padding: 24px;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CoticoContainer = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

export const CoticoGradient = styled(LinearGradient).attrs(() => ({
  colors: ['rgba(242, 242, 242, 0.8)', 'rgba(166, 166, 166, 0.6)'],
  start: { x: 0.5, y: 0.5 },
  end: { x: 1, y: 1 },
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export const CoticoImage = styled.Image`
  width: 70px;
  height: 70px;
`;

export const LevelText = styled.Text`
  color: black;
  font-size: 12px;
`;

export const AddCoticoButton = styled(TouchableOpacity)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    max-width: 70%;
    min-width: 70%;

    background-color: #4d4dff;

    border-radius: 6px;

    justify-content: center;
    align-items: center;
    margin-top: 10px;

`;

export const AddCoticoText = styled.Text`
    font-size: 16px;
    color: white;
    text-align: center;
`;
