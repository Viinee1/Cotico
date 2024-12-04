import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";
import { TouchableOpacity, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

export const ButtonCriarConta = styled(TouchableOpacity)`
    margin-top: 10px;
    flex: 1;
`;

export const ButtonText = styled(Text)`
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
`;