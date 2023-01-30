import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #999999;
  width: 30rem;

  border-radius: 0.4rem;
  padding: 2rem;
  background-color: #ffffff;
  @media (max-width: 430px) {
    width: 20rem;
  }

  @media (max-width: 380px) {
    width: 18rem;
  }
`;

export const Top = styled.div`
  margin-bottom: 2rem;
`;

export const BoxStep = styled.div`
  background-color: #ff9300;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IndexStep = styled.h1`
  color: #fdfdfe;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
`;

export const Title = styled.h1`
  color: #666666;
  font-family: "Rubik", sans-serif;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.h1`
  color: #666666;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  font-weight: 400;
`;

export const ContainerInputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BtnContinuar = styled.button`
  text-decoration: none;
  background: #ff9300;
  height: 4rem;
  width: 100%;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.3rem;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
`;

export const BtnSearch = styled.button`
  text-decoration: none;
  background: #ff9300;
  height: 2.7rem;
  width: 5rem;

  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  font-size: 0.9rem;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
`;
