import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
`;

export const Carrosel = styled.div`
  width: 34rem;
  height: 28rem;
  box-shadow: rgba(0, 0, 0, 0.27) 0px 5px 6px;
  border-radius: 0.1rem;
  display: flex;

  background-color: #ffff;
`;
export const CollunmImagens = styled.div`
  height: 100%;

  max-width: 9rem;
`;

export const ImageFull = styled.div`
  height: 100%;
  width: 100%;
`;

export const Info = styled.div`
  padding: 2rem;
  width: 33rem;

  box-shadow: rgba(0, 0, 0, 0.27) 0px 5px 6px;
  border-radius: 0.1rem;
  background-color: #ffff;
`;

export const InfoTop = styled.div`
  border-bottom: 1px solid #e1e3e4;
`;

export const Title = styled.h1`
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;
  margin-bottom: 2rem;
`;

export const Price = styled.h1`
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 500;
`;

export const PriceValues = styled.div`
  margin-left: 0.5rem;
`;

export const NewPrice = styled.h1`
  color: #34b475;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: "line-through";
`;

export const Strong = styled.strong`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
`;

export const Economia = styled.div`
  margin-top: 0.8rem;
  height: 1.3rem;
  width: 9rem;
  background: #34b475;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const EconomiaText = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
`;

export const InfoDown = styled.div`
  margin-top: 2rem;
`;

export const Cor = styled.div`
  margin-bottom: 2rem;
`;

export const Quantidade = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const BtnQuantidade = styled.button`
  height: 2.6rem;
  width: 2.6rem;
  border: 1px solid #e1e3e4;

  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
`;

export const DisplayQuantidade = styled.div`
  height: 2.45rem;
  width: 2.6rem;
  border: 1px solid #e1e3e4;

  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
`;

export const TitleBtn = styled.button`
  height: 4rem;
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  background: #10db00;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
`;

export const CardPayments = styled.div`
  margin-top: 2rem;

  width: 30rem;
  border-top: 1px solid #0000;

  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.27) 0px 5px 6px;
  margin-bottom: 1rem;
`;

export const TopCardPayments = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e1e3e4;
`;

export const LineCards = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

export const DownCardPayments = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const DeliveryContainer = styled.div`
  padding: 1rem;
`;

export const LineInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconBox = styled.div`
  height: 1.4rem;
  width: 1.4rem;
  border: 1px solid #eaeaea;
  border-radius: 0.2rem;
  margin-bottom: 0.8rem;
  padding: 0.2rem;
`;

export const Icons = styled.img`
  height: 100%;
  width: 100%;
`;

export const String = styled.h1`
  margin-top: -0.5rem;
  color: #677279;
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;
