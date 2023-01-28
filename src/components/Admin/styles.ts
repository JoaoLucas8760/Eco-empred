import styled from "styled-components";

export const Container = styled.div`
  background-color: #1d2038;

  display: grid;
  grid-template-columns: 30rem 30rem;
  padding: 1rem;
`;

export const Card = styled.div`
  background-color: #313131;
  width: 25rem;
  height: 15rem;
  border-radius: 0.4rem;
  border: 1px solid #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
`;

export const SubTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #666666;
`;

export const LineItem = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-family: "Rubik", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
`;

export const StatusOff = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: #ae2a2f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StatusOffTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #e7272d;
`;

export const StatusOn = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: #4ba54d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StatusOnTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #80ef91;
`;
