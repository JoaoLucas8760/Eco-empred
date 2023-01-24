import styled from "styled-components";

export const Container = styled.form`
  border: 2px solid #999999;
  width: 30rem;

  border-radius: 0.4rem;
  padding: 2rem;
  background-color: #ffffff;
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

export const PaymentContainer = styled.div`
  border: 1px solid #000000;

  border-radius: 0.4rem;
  padding: 1rem;
  background-color: #f4f6f8;
`;

export const CheckBox = styled.div`
  background-color: #333333;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Checked = styled.div`
  background-color: #ffff;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
`;

export const Paragraph = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #333333;
`;

export const LineCards = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Card = styled.img``;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

export const Label = styled.h1`
  color: #333333;
  font-size: 0.85rem;
  font-weight: 400;
  font-family: "Rubik", sans-serif;
  margin-bottom: 0.4rem;
`;

export const Select = styled.select`
  padding: 1rem;
  border-radius: 0.3rem;
  font-family: "Rubik", sans-serif;
  border: 1px solid #d0d0d0;
  width: 100%;
  &:focus {
    border: 1px solid #d0d0d0;
  }
`;

export const Option = styled.option`
  font-family: "Rubik", sans-serif;
  &:focus {
    border: 1px solid #d0d0d0;
  }
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
  font-size: 1.25rem;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
`;

export const PixContainer = styled.div``;
