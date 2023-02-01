import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem;
  background-color: #0086ff;
  max-width: 100%;
  height: 6rem;
`;

export const Gradient = styled.section`
  background: rgb(252, 176, 69);
  background: linear-gradient(
    90deg,
    rgba(252, 176, 69, 1) 10%,
    rgba(131, 58, 180, 1) 27%,
    rgba(141, 56, 168, 1) 33%,
    rgba(134, 57, 176, 1) 45%,
    rgba(151, 53, 155, 1) 53%,
    rgba(253, 29, 29, 1) 100%
  );
  max-width: 100%;
  box-sizing: border-box;
  height: 0.5rem;
  display: block;
`;

export const Icon = styled.img`
  cursor: pointer;
`;

export const Logo = styled.img``;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;

  height: 1rem;
  border-radius: 0.3rem;
  padding: 1.1rem;
  font-family: Arial;
  color: #9999;
  font-weight: 500;
  font-size: 0.8rem;
`;
