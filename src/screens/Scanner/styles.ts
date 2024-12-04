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
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: white;
`;

export const ImageContainer = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 75px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #ddd;
`;

export const Result = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
`;

export const ButtonCameraImage = styled(TouchableOpacity)`
    flex: 1;
    min-height: 76px;
    max-height: 76px;
    max-width: 70%;
    min-width: 70%;

    background-color: #4d4dff;

    border-radius: 6px;

    justify-content: center;
    align-items: center;
    margin-top: 10px;

`;

export const ButtonCameraImageText = styled.Text`
    font-size: 16px;
    color: white;
    text-align: center;
`;

export const ButtonGaleryImage = styled(TouchableOpacity)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    max-width: 70%;
    min-width: 70%;

    background-color: #4d4dff;

    border-radius: 6px;

    justify-content: center;
    align-items: center;
    margin-top: 20px;

`;

export const ButtonGaleryImageText = styled.Text`
    font-size: 16px;
    color: white;
    text-align: center;
`;

export const ButtonQRCode = styled(TouchableOpacity)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    max-width: 70%;
    min-width: 70%;

    background-color: #660080;

    border-radius: 6px;

    justify-content: center;
    align-items: center;
    margin-top: 10px;

`;

export const ButtonQRCodeText = styled.Text`
    font-size: 16px;
    color: white;
    text-align: center;
`;