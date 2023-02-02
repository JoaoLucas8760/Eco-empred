import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  height: 60rem;
  padding: 0.5rem;
`;

export const BoxImage = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: inherit;
  object-fit: contain;
  margin: auto;
  max-height: 40vh;
`;

export const ProductTitle = styled.div`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  color: #404040;
  font-weight: 500;
`;

export const Rates = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`;

export const RateTitle = styled.h1`
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  color: #808080;
  font-weight: 400;
`;

export const Description = styled.div`
  margin-top: 1rem;
`;
