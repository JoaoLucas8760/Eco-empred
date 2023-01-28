import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.h1`
  color: #333333;
  font-size: 0.85rem;
  font-weight: 400;
  font-family: "Rubik", sans-serif;
  margin-bottom: 0.4rem;
  @media (max-width: 380px) {
    font-size: 0.746rem;
  }
`;

export const InputStyle = styled.input`
  font-family: "Rubik", sans-serif;
  border: 1px solid #d0d0d0;

  &:focus {
    border: 1px solid #333333;
  }

  :-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
