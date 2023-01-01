import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100vh;
  justify-content: center;
`;
export const H1 = styled.h1`
  display: flex;
  justify-content: center;
`;
export const Label = styled.label`
  margin: 10px 0;
`;
export const Input = styled.input`
  border: none;
  height: 30px;
`;
export const Button = styled.button`
  height: 30px;
  margin-top: 10px;
  background: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
 
`;
