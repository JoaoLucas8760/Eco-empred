import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
`;

export const Text = styled.h1`
  color: #505470;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
`;

export const ProductsContainer = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  border: 1px solid #b2b5c4;
  border-radius: 0.1rem;
  cursor: pointer;
`;

export const ProductImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #000;
`;

export const ProductName = styled.h1`
  color: #000;
  font-size: 0.7rem;
  font-family: "Roboto", sans-serif;
`;
