import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  background: #e3e8ed;
  margin-bottom: 1.8rem;
  border-radius: 0.4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 10s;
  font-family: "Rubik", sans-serif;
  transition: all 0.2s ease 0s;
  @media (max-width: 430px) {
    width: 20rem;
  }

  @media (max-width: 380px) {
    width: 18rem;
  }
`;

export const Title = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  color: #333333;
  font-weight: 400;
`;

export const SubTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
`;

export const Price = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1.35rem;
  color: #44c485;
`;

export const Img = styled.img`
  cursor: pointer;
`;

export const OpenContainer = styled.div`
  width: 30rem;
  background: #ffffff;
  margin-bottom: 1.8rem;
  border-radius: 0.4rem;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.2s ease 0s;
  @media (max-width: 430px) {
    width: 20rem;
  }

  @media (max-width: 380px) {
    width: 18rem;
  }
`;

export const BoxImage = styled.div`
  width: 3.75rem;
  height: 3.75rem;
`;

export const ContainerDescription = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoxQuantidade = styled.div`
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.3rem;
  gap: 2.5rem;
`;

export const BtnQuantidade = styled.a`
  background: #f5f5f5;
  border-radius: 0.3rem;
  padding: 0.6rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const InputCupom = styled.input`
  font-family: "Rubik", sans-serif;
  border: 1px solid #d0d0d0;
  padding: 0.7rem;
  border-radius: 0.4rem;
  font-weight: 400;
  color: #cbd0df;

  &:focus {
    border: 1px solid #333333;
  }
`;

export const BtnAddCupom = styled.a`
  font-family: "Rubik", sans-serif;
  color: #725bc2;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const BoxResume = styled.div`
  background: #f4f6f8;

  padding: 1rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ResumeTitlte = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  color: #333333;
  font-weight: 500;
`;

export const BoxTitleResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
