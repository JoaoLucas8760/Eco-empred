import styled from "styled-components";

export const Container = styled.form`
  display: flex;

  justify-content: center;

  width: 100%;
  height: 100vh;
  margin-bottom: 5rem;
`;

export const Input = styled.input`
  border: 1px solid #e5e3ed;
  border-radius: 4px;
  color: #000;

  width: 10rem;

  padding: 1rem;
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
`;

export const Button = styled.button`
  padding: 1rem;
  border: 1px solid #e5e3ed;
  border-radius: 4px;
  background: #1e2761;
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;
