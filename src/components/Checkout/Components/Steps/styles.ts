import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  margin-bottom: 2rem;
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
