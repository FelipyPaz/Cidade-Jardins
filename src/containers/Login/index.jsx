import React from "react";
import Logo from "../../assets/Logo.svg";
import {
  Container,
  ContainerItens,
  Left,
  Right,
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
      <ContainerItens>
        <Left>
          <Img src={Logo} alt="Bandeira da cidade " />
          <P>escola municipal cidade jardins </P>
        </Left>
        <Right>
          <H1>login</H1>
          <Label>E-mail</Label>
          <Input />
          <Label>Senha</Label>
          <Input />
          <Button>Sing up</Button>
        </Right>
      </ContainerItens>
    </Container>
  );
}
