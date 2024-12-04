import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

interface ProgressProps {
    width: string;
}

export const GradientBackground = styled(LinearGradient).attrs(() => ({
  colors: ['#008040', '#006633', '#004d26', '#00331a'],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
  locations: [0, 0.34, 0.67, 1],
}))`
  flex: 1;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  
`;

export const PetContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PetImage = styled.Image`
  width: 180px;
  height: 180px;
`;

export const InfoCard = styled.View`
  width: 100%;
  height: 78%;
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 20px;
  align-items: center;
`;

export const PetName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const ProgressContainer = styled.View`
  margin: 20px 0;
  align-items: center;
`;

export const ProgressBar = styled.View`
  width: 200px;
  height: 10px;
  background-color: #aaa;
  border-radius: 5px;
  overflow: hidden;
`;

export const Progress = styled.View<ProgressProps>`
  width: ${(props) => props.width || '0%'};
  height: 100%;
  background-color: #4caf50;
`;

export const ProgressText = styled.Text`
  font-size: 14px;
  color: #000;
  margin-top: 5px;
`;

export const InfoText = styled.Text`
  font-size: 18px;
  color: #000;
  margin-bottom: 5px;
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
  padding: 10px;
`;


