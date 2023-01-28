import styled from "styled-components";

export const Container = styled.div`
  background: #f4f6f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  height: 5rem;
  background: #ffffff;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 10rem 0rem 10rem;
  @media (max-width: 430px) {
    width: 20rem;
    padding: 0rem 1rem 0rem 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WarrantyContainer = styled.div`
  margin-top: 2rem;
  width: 30rem;

  border-radius: 0.4rem;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: -4px 1px 24px -10px rgba(166, 166, 166, 1);
  margin-bottom: 4rem;
  @media (max-width: 430px) {
    width: 20rem;
  }

  @media (max-width: 380px) {
    width: 18rem;
  }
`;

export const WarrantyBox = styled.div`
  display: flex;

  gap: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px dashed #e5e5e5e5;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
`;

export const SubDescription = styled.div``;

export const Title = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #666666;
`;

export const SubTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666666;
  line-height: 20px;
`;

export const ProductBox = styled.div`
  display: flex;
`;

export const Footer = styled.div`
  width: 100%;
  border-top: 1px solid #d0d0d0;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 430px) {
    width: 20rem;
  }

  @media (max-width: 380px) {
    width: 18rem;
  }
`;

export const LineCards = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 430px) {
    display: block;
  }
`;

export const Card = styled.img``;
