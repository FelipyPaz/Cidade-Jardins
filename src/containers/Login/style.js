import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerItens = styled.div`
  height: 70%;
  padding: 10px;
  display: flex;
  justify-content: center;
  background: #f3f3f3;
  flex-direction: column;
`;
export const Img = styled.img`
  width: 300px;
`;

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Label = styled.label``;
export const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  border: 1px solid;
  width: 300px;
`;
export const Button = styled.button`
  width: 300px;
  height: 40px;
  background: none;
  border-radius: 5px;
  border: 1px solid;
cursor: pointer;
  margin-top: 10px;
  &:hover{
    background:#f5f5f5;
  }
`;
export const P = styled.p`
  width: 300px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  margin-top: 50px;
`;
