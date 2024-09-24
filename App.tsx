import { StatusBar } from 'react-native';
import { Login } from './src/screens/Login';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import Pets from './src/screens/Pets';

export default function App() {
  return (

    <ThemeProvider theme={theme}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
        <Pets></Pets>
        </ThemeProvider>
  );
}


