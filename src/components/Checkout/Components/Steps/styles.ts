import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 430px) {
    width: 20rem;
  }

  @media (max-width: 380px) {
    width: 18rem;
  }
`;

export const Step = styled.div`
  background-color: #d4d4d5;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StepActive = styled.div`
  background-color: #36b376;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  scale: 1.2;
`;

export const IndexStep = styled.h1`
  color: #fdfdfe;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 10rem;
`;

export const TitleActive = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 0.9rem;
  color: #000000;
`;

export const Title = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 0.9rem;
  color: #666666;
  font-weight: 400;
`;
