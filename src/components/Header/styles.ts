import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
  margin-left: 3rem;
  margin-right: 7rem;
`;

export const Container = styled.div`
  background-color: #000000;
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;

  gap: rem;
`;

export const ContainerSearch = styled.div`
  display: flex;
  margin-left: 2rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Input = styled.input`
  height: 2.8rem;
  width: 40rem;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  padding-left: 0.9rem;
  font-size: 1rem;
`;

export const BtnPesquisar = styled.button`
  height: 2.81rem;
  width: 3rem;
  background: #ba001b;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BtnCart = styled.button`
  background: none;
  cursor: pointer;
`;
