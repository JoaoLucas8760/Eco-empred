import React from "react";
import {
  CardEffect,
  CardNumber,
  Chip,
  Container,
  ContainerBackview,
  Flip,
  Holder,
  MonthYear,
  Range,
  RangeWhite,
  Title,
  Validade,
} from "./styles";

import styles from "./styles.module.css";

interface CreditCardProps {
  cardNumber: string;
  cardDate: string;
  cardCvv: string;
  cardHolder: string;
  backView: boolean;
}

export default function CreditCard({
  cardNumber,
  cardDate,
  cardCvv,
  cardHolder,
  backView,
}: CreditCardProps) {
  const tranform = {
    transform: "rotateY(180deg)",
  };
  return (
    <CardEffect className={styles.card}>
      <Flip
        className={styles.flip}
        style={backView === true ? tranform : undefined}
      >
        <ContainerBackview className={styles.backCard}>
          <Range>{"."}</Range>

          <div style={{ display: "flex" }}>
            <RangeWhite>{"."}</RangeWhite>
            <CardNumber
              style={{
                fontSize: "0.9rem",
                marginLeft: "0.3rem",
                marginRight: 0,
                marginBottom: "1rem",
              }}
            >
              {cardCvv === "" ? "•••" : cardCvv}
            </CardNumber>
          </div>
          <Chip></Chip>
        </ContainerBackview>

        <Container className={styles.frontCard}>
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
              <Holder>
                {cardHolder === "" ? "NOME E SOBRENOME" : cardHolder}
              </Holder>
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
      </Flip>
    </CardEffect>
  );
}
