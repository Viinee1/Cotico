import React, { useState } from 'react';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { ButtonCriarConta, ButtonText, Container, GradientBackground } from "./styles";
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Text } from 'react-native';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('main');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <GradientBackground>
    <Container>
      <Title />
      <Input placeholder="Email"
        value={email}
        onChangeText={setEmail}
        />
      <Input placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button title="Entrar" onPress={handleSignIn} />
      <ButtonCriarConta onPress={() => navigation.navigate('cadastro')}>
      <ButtonText>Criar Conta</ButtonText>
        </ButtonCriarConta>
    </Container>
    </GradientBackground>

  );
};

export default Login;
