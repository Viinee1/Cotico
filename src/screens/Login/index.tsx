import { ThemeProvider } from "styled-components/native";
import { Container } from "./styles";
import theme from "../../theme";
import { StatusBar } from "react-native";

export function Login(){
    return(
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
        <Container></Container>
        </ThemeProvider>
    )
}