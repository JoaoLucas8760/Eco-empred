import React, { useState } from "react";
import CreditCard from "../Card";
import Input from "../Input";
import {
  BoxStep,
  BtnContinuar,
  Card,
  CheckBox,
  Checked,
  Container,
  ContainerInputs,
  IndexStep,
  Label,
  LineCards,
  Paragraph,
  PaymentContainer,
  PixContainer,
  Price,
  Select,
  Subtitle,
  Title,
  Top,
  Uncheckd,
} from "./styles";

import pixIcon from "../../../../assets/pix.svg";
import styled from "styled-components";

export default function Form3() {
  const [cardNumber, setcardNumber] = useState("");
  const [cardExpiricy, setCardExpiricy] = useState("");
  const [cardCvv, setcardCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const [pixSelected, setPixSelected] = useState(false);
  const [backView, setBackView] = useState(false);

  const preco = 56.9;

  return (
    <Container>
      <Top>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <BoxStep>
            <IndexStep>3</IndexStep>
          </BoxStep>

          <Title>Pagamento</Title>
        </div>
        <Subtitle>Escolha uma forma de pagamento</Subtitle>
      </Top>

      {pixSelected === true ? (
        <PixContainer onClick={() => setPixSelected(false)}>
          <Uncheckd></Uncheckd>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Paragraph style={{ fontWeight: "500", fontSize: "1.15rem" }}>
              Cartão de crédito
            </Paragraph>
            <LineCards
              style={{ marginTop: "1rem", marginLeft: 0, marginBottom: 0 }}
            >
              <Card src="https://icons.yampi.me/svg/card-amex.svg" />
              <Card src="https://icons.yampi.me/svg/card-visa.svg" />
              <Card src="https://icons.yampi.me/svg/card-diners.svg" />
              <Card src="https://icons.yampi.me/svg/card-mastercard.svg" />

              <Card src="https://icons.yampi.me/svg/card-hipercard.svg" />
              <Card src="https://icons.yampi.me/svg/card-elo.svg" />
            </LineCards>
          </div>
        </PixContainer>
      ) : (
        <PaymentContainer>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <CheckBox>
              <Checked></Checked>
            </CheckBox>
            <Paragraph style={{ fontWeight: "500", fontSize: "1.15rem" }}>
              Cartão de crédito
            </Paragraph>
          </div>
          <LineCards>
            <Card src="https://icons.yampi.me/svg/card-amex.svg" />
            <Card src="https://icons.yampi.me/svg/card-visa.svg" />
            <Card src="https://icons.yampi.me/svg/card-diners.svg" />
            <Card src="https://icons.yampi.me/svg/card-mastercard.svg" />

            <Card src="https://icons.yampi.me/svg/card-hipercard.svg" />
            <Card src="https://icons.yampi.me/svg/card-elo.svg" />
          </LineCards>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <CreditCard
              backView={backView}
              cardNumber={cardNumber}
              cardDate={cardExpiricy}
              cardHolder={cardHolder}
              cardCvv={cardCvv}
            />
          </div>

          <ContainerInputs>
            <Input
              label="Número do cartão"
              placeholder="1234 1234 1234 1234"
              width="92%"
              value={cardNumber}
              onChange={({ target }: any) => {
                let value = target.value;
                setcardNumber(
                  value
                    .replace(/\D/g, "")
                    .replace(/(\d{4})(\d)/, "$1 $2")
                    .replace(/(\d{4})(\d)/, "$1 $2")
                    .replace(/(\d{4})(\d)/, "$1 $2")
                    .replace(/(-\d{4})\d+?$/, "$1")
                );
              }}
              onFocus={() => setBackView(false)}
              maxLength={19}
            />

            <div style={{ display: "flex", gap: "3rem" }}>
              <Input
                label="Validade"
                placeholder="MM/AAAA"
                value={cardExpiricy}
                onChange={({ target }: any) => {
                  let value = target.value;

                  setCardExpiricy(value);
                }}
                width={"90%"}
                maxLength={7}
                onFocus={() => setBackView(false)}
              />

              <Input
                label="Cód. de segurança"
                placeholder=""
                value={cardCvv}
                onChange={({ target }: any) => {
                  setcardCvv(target.value);
                }}
                width={"80%"}
                maxLength={4}
                onFocus={() => setBackView(true)}
              />
            </div>
            <Input
              label="Nome e sobrenome do titular"
              placeholder="ex.:Maria de Almdeida Cruz"
              width="92%"
              value={cardHolder}
              onChange={({ target }: any) => {
                let value = target.value;

                setCardHolder(value);
              }}
              onFocus={() => setBackView(false)}
              maxLength={26}
              type="text"
            />

            <Input
              label="CPF do titular"
              placeholder="000.000.000-00"
              value={cpfValue}
              onChange={({ target }: any) => {
                setCpfValue(target.value);
              }}
              width={"60%"}
              onFocus={() => setBackView(false)}
            />

            <div>
              <Label>Nº de Parcelas</Label>
              <Select>
                <option selected>Selecione</option>
                <option>1x de R$ {preco / 1}</option>
                <option>2x de R${preco / 2}</option>
                <option>3x de R${preco / 3}</option>
                <option>4x de R${preco / 4}</option>
                <option>4x de R$</option>
                <option>6x de R$</option>
                <option>7x de R$</option>
                <option>8x de R$</option>
                <option>9x de R$</option>
              </Select>
            </div>
          </ContainerInputs>
          <BtnContinuar>Comprar agora</BtnContinuar>
        </PaymentContainer>
      )}

      {pixSelected === false ? (
        <PixContainer
          onClick={() => {
            setPixSelected(true);
            window.scroll(400, 400);
          }}
        >
          <Uncheckd></Uncheckd>

          <img src={pixIcon} />
          <Paragraph style={{ fontWeight: "500", fontSize: "1.15rem" }}>
            Pix
          </Paragraph>
        </PixContainer>
      ) : (
        <PaymentContainer style={{ marginTop: "1rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <CheckBox>
              <Checked></Checked>
            </CheckBox>
            <img src={pixIcon} />
            <Paragraph style={{ fontWeight: "500", fontSize: "1.15rem" }}>
              Pix
            </Paragraph>
          </div>

          <Paragraph
            style={{
              fontWeight: "500",
              fontSize: "0.9rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            A confirmação de pagamento é realizada em poucos minutos. Utilize o
            aplicativo do seu banco para pagar.
          </Paragraph>

          <Price
            style={{
              marginBottom: "2rem",
            }}
          >
            Valor no Pix: R$ {preco}
          </Price>

          <BtnContinuar>Comprar agora</BtnContinuar>
        </PaymentContainer>
      )}
    </Container>
  );
}
