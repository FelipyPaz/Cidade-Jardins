import React from "react";
import { ContainerItens, Container, H1, Label, Input, Button } from "./style";

export function Register() {
  return (
    <Container>
      <ContainerItens>
        <H1>Cadastro</H1>
        <Label>Email</Label>
        <Input />
        <Label>Ano</Label>
        <Input />
        <Label>Turma</Label>
        <Input />
        <Label>Senha</Label>
        <Input />
        <Label>Confirmar Senha</Label>
        <Input />
        <Button>sign up</Button>
      </ContainerItens>
    </Container>
  );
}
