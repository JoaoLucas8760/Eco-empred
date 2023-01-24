import React from "react";
import {
  CardNumber,
  Chip,
  Container,
  Holder,
  MonthYear,
  Title,
  Validade,
} from "./styles";

interface CreditCardProps {
  cardNumber: string;
  cardDate: string;
  cardCvv: string;
  cardHolder: string;
}

export default function CreditCard({
  cardNumber,
  cardDate,
  cardCvv,
  cardHolder,
}: CreditCardProps) {
  return (
    <Container>
      <Chip></Chip>
      <CardNumber>
        {cardNumber === "" ? "•••• •••• •••• ••••" : cardNumber}
      </CardNumber>

      <div style={{ marginTop: "2.4rem", display: "flex", gap: "5rem" }}>
        <div
          style={{
            marginLeft: "1.5rem",

            width: "9rem",
          }}
        >
          <Holder>{cardHolder === "" ? "NOME E SOBRENOME" : cardHolder}</Holder>
        </div>
        <Validade>
          <Title style={{ fontSize: "0.34rem", textAlign: "end" }}>
            vali
            <br />
            dade
          </Title>
          <MonthYear>
            <Title
              style={{
                fontSize: "0.4rem",
                textAlign: "end",
                fontWeight: "400",
              }}
            >
              MÊS/ANO
            </Title>
            <Title style={{ fontSize: "0.5rem", textAlign: "end" }}>
              {cardDate === "" ? "••/••" : cardDate}
            </Title>
          </MonthYear>
        </Validade>
      </div>
    </Container>
  );
}
