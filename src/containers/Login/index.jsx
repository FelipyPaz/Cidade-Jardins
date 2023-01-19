import React from "react";
import Logo from "../../assets/Logo.svg";
import {
  Container,
  ContainerItens,
  Img,
  Label,
  Button,
  P,
  Input,
  H1,
} from "./style"; 

export function Login() {
  return (
    <Container>
      <Img src={Logo} alt="Bandeira da cidade " />
      <ContainerItens>
        <P>Escola Municipal Cidade Jardins </P>
        <H1>Login</H1>
        <Label>E-mail</Label>
        <Input />
        <Label>Senha</Label>
        <Input />
        <Button>Sing up</Button>
      </ContainerItens>
    </Container>
  );
}
