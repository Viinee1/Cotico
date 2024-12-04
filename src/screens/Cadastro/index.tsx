import React, { useState } from 'react';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { ButtonCriarConta, ButtonText, Container, GradientBackground } from "./styles";
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Text } from 'react-native';

export const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuário criado com sucesso!");
      navigation.navigate('main');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <GradientBackground>
    <Container>
      <Title />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button title="Criar Conta" onPress={handleSignUp} />
      <ButtonCriarConta onPress={() => navigation.navigate('login')}>
      <ButtonText>Voltar para login</ButtonText>
        </ButtonCriarConta>
    </Container>
    </GradientBackground>
  );
};

export default Cadastro;
