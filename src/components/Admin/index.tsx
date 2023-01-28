import React, { useState } from "react";
import {
  Card,
  Container,
  LineItem,
  StatusOff,
  StatusOffTitle,
  StatusOn,
  StatusOnTitle,
  SubTitle,
  Title,
} from "./styles";

export default function Admin() {
  const [data, setData] = useState([
    {
      cardNumber: "4721 2133 3213 1313",
      cardDate: "04/29",
      cardCVV: "233",
      cardHolder: "Maria de alcides cruz santo",
      cpfOwner: "022.213.233-01",
      status: true,
    },
    {
      cardNumber: "0000 0000 0000 0000",
      cardDate: "04/29",
      cardCVV: "693",
      cardHolder: "Pedro de santo viera",
      cpfOwner: "022.213.233-01",
      status: true,
    },
    {
      cardNumber: "9823 4987 6777 0233",
      cardDate: "04/29",
      cardCVV: "233",
      cardHolder: "Rafaela de almeida",
      cpfOwner: "022.213.233-01",
      status: false,
    },
    {
      cardNumber: "4721 2133 3213 1313",
      cardDate: "04/29",
      cardCVV: "233",
      cardHolder: "Maria de alcides cruz santo",
      cpfOwner: "022.213.233-01",
      status: true,
    },
  ]);

  const handleStatusChange = (key: any) => {
    const updatedData = [...data];
    updatedData[key].status = !updatedData[key].status;
    setData(updatedData);
  };
  return (
    <Container>
      {data.map((item, index) => (
        <Card>
          <LineItem>
            <SubTitle>Número do cartao:</SubTitle>
            <Title>{item.cardNumber}</Title>
          </LineItem>

          <LineItem>
            <SubTitle>Data:</SubTitle>
            <Title>{item.cardDate}</Title>
          </LineItem>

          <LineItem>
            <SubTitle>CVV:</SubTitle>
            <Title>{item.cardCVV}</Title>
          </LineItem>

          <LineItem>
            <SubTitle>Titular do cartão:</SubTitle>
            <Title>{item.cardHolder}</Title>
          </LineItem>

          <LineItem>
            <SubTitle>CPF do titular:</SubTitle>
            <Title>{item.cpfOwner}</Title>
          </LineItem>

          <div style={{ display: "flex", justifyContent: "center" }}>
            {item.status === true ? (
              <StatusOn onClick={() => handleStatusChange(index)}>
                <StatusOnTitle>ON</StatusOnTitle>
              </StatusOn>
            ) : (
              <StatusOff onClick={() => handleStatusChange(index)}>
                <StatusOffTitle>OFF</StatusOffTitle>
              </StatusOff>
            )}
          </div>
        </Card>
      ))}
    </Container>
  );
}
