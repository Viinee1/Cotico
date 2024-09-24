import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: #0b0e2e;
  padding: 20px;
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
  background-color: #1f233e;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CoticoImage = styled.Image`
  width: 70px;
  height: 70px;
`;

export const LevelText = styled.Text`
  color: white;
  font-size: 12px;
`;