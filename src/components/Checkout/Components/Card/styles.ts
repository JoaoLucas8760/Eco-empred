import { Card } from "./../../styles";
import styled, { keyframes } from "styled-components";

export const ContainerBackview = styled.div`
  width: 21rem;
  height: 11.5rem;
  background-color: #cccccc;
  border-radius: 10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  @media (max-width: 430px) {
    width: 18rem;
  }

  @media (max-width: 380px) {
    width: 16rem;
  }
`;

export const Range = styled.div`
  margin-top: 1rem;
  width: 100%;
  background-color: #3e3e3e;
  height: 2.3rem;
`;

export const RangeWhite = styled.div`
  margin-top: 1rem;
  margin-left: 0.5rem;
  width: 80%;
  background-color: #fff;
  height: 1.9rem;
  color: #fff;
`;

export const Container = styled.div`
  max-width: 20rem;
  height: 11.5rem;
  background-color: #cccccc;
  border-radius: 10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  @media (max-width: 430px) {
    width: 18rem;
  }

  @media (max-width: 380px) {
    width: 16rem;
  }
`;

export const Flip = styled.div``;
export const CardEffect = styled.div``;

/////////////////////////////////////////////////////////////

export const Chip = styled.div`
  margin-left: 1.5rem;
  margin-top: 2rem;
  background-color: #b8b8b8;
  height: 2.1875rem;
  width: 3.125rem;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  :before {
    content: " ";
    display: block;
    width: 70%;
    height: 60%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #d9d9d9;
    position: absolute;

    top: 20%;
  }
`;

export const CardNumber = styled.h1`
  margin-top: 1rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 400;
  display: flex;
  @media (max-width: 380px) {
    font-size: 0.96rem;
  }
`;

export const Holder = styled.h1`
  font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;
  font-size: 0.8rem;
  text-align: center;
  max-width: 9rem;

  font-weight: 700;
  color: #e4e4e4;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;
  font-size: 0.8rem;
  color: #e4e4e4;
  font-weight: 400;
`;

export const Validade = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MonthYear = styled.div`
  margin-right: 1rem;
`;
