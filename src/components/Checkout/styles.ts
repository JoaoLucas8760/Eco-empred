import styled from "styled-components";

export const Container = styled.div`
  background: #f4f6f8;
`;

export const Header = styled.div`
  height: 5rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 52rem;
  margin-bottom: 3rem;
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
