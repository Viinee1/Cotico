import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Container } from "./styles";


export function Login(){
    return(
        <Container>
            <Title/>
            <Input placeholder="Login"/>
            <Input placeholder="Senha" secureTextEntry={true} />
            <Button title="Entrar"></Button>
        </Container>
    )
}