import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

import { Routes } from './src/routes';


export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <StatusBar  backgroundColor="transparent" translucent />
      <Routes />
    </ThemeProvider>
  );
}


