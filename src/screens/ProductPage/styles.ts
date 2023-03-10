import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;

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

export const Paragraph = styled.h1`
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  color: #404040;
  font-weight: 400;
`;

export const BoxCard = styled.div`
  margin-top: 1rem;
  max-width: 100%;
  height: 2rem;
  padding: 1rem;
  border: 1px solid #ededed;
  border-radius: 0.2rem;
`;

export const BoxFrete = styled.div`
  margin-top: 1rem;
  max-width: 100%;
  height: 1.5rem;
  padding: 1rem;
  background-color: #f4f4f4;
  border-radius: 0.2rem;
`;

export const BuyBtn = styled.button`
  background-color: rgb(89, 192, 11);
  width: 100%;
  height: 4.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 0.3rem;
  margin-top: 3rem;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #479908;
  }
`;

export const Footer = styled.div`
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 5rem;
  gap: 10rem;
  @media (max-width: 600px) {
    gap: 4rem;
  }
`;

export const WarrantyBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;
export const WarrantyDescription = styled.h1`
  max-width: 24rem;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  color: #000;
  font-weight: 400;
  @media (max-width: 1000px) {
    max-width: 10rem;
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
    color: #000;
    font-weight: 400;
  }
`;

export const FooterContainer = styled.div`
  background-color: #0000ee;
`;
