import React from "react";
import Header from "./components/Header";
import {
  BoxCard,
  BoxFrete,
  BoxImage,
  BuyBtn,
  Container,
  Description,
  Footer,
  Img,
  Paragraph,
  ProductTitle,
  Rates,
  RateTitle,
  WarrantyBox,
  WarrantyDescription,
} from "./styles";
import Shopping from "./assets/shopping-icon.svg";
import StarIcon from "./assets/star.svg";
import ShareIcon from "./assets/share-icon.svg";
import HeartIcon from "./assets/heart-icon.svg";
import LocIcon from "./assets/Loc-icon.svg";
import Shield from "./assets/shield-check.svg";
import Package from "./assets/package.svg";

import { useNavigate } from "react-router-dom";

const data = {
  antPrice: "140,00",
  Price: "126,00",
  parcela12: "11,66",
  parcela6: "23,33",
  title: "Alexa Echodot Amazon 3 Geração Black",
  productInfo:
    "Alexa Echo Dot 3 GeraçãoA Amazon Echo é a caixa de som inteligente que chega como o carro chefe da Alexa, assistente pessoal da empresa, sendo o modelo que oferece a melhor qualidade de som entre os modelos vendidos no Brasil.O que é Alexa ... Assim como suas concorrentes a Alexa é uma assistente conversacional, capaz de entender contexto até certo ponto e executar tarefas simples, como configurar alarmes, informar a situação do trânsito ou a previsão do tempo, executar uma lista de músicas ou reproduzir podcasts.Dimensão: 148 x 99 x 99 mmPeso: 780 gramasSistema: Amazon AlexaWireless: SimPotência de Som: Woofer de neodímio 3 e tweeter de 0,6Como usar a Alexa1.De 8 Faça login na sua conta Amazon para utilizar a Alexa - Foto: Reprodução/Helito Beggiora. ...2.De 8 Selecione o dispositivo Amazon Alexa e confirme seu nome - Foto: Reprodução/Helito Beggiora.",
  ImageUrl1:
    "https://a-static.mlcdn.com.br/450x450/alexa-echodot-amazon-3-geracao-black/oliststore/mglol6o8u7lsirol/57b1490592d84bbe6b9509757b024c35.jpeg",
};

export default function ProductPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        <Img src={data.ImageUrl1} />

        <ProductTitle>{data.title}</ProductTitle>

        <Rates>
          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "0.1rem" }}>
              <img src={StarIcon} />
              <img src={StarIcon} />
              <img src={StarIcon} />
              <img src={StarIcon} />
              <img src={StarIcon} />
            </div>
            <RateTitle style={{ marginLeft: "0.5rem" }}>5.0</RateTitle>
            <RateTitle style={{ marginLeft: "0.2rem" }}>(26)</RateTitle>
            <img src={ShareIcon} />
          </div>
          <img src={HeartIcon} />
        </Rates>

        <Description>
          <RateTitle
            style={{ fontSize: "0.9rem", textDecoration: "line-through" }}
          >
            R$ {data.antPrice}
          </RateTitle>
          <ProductTitle style={{ marginTop: "-0.4rem" }}>
            R$ {data.Price}
          </ProductTitle>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <Paragraph>no pix </Paragraph>
            <Paragraph style={{ color: "#59C00b", fontSize: "1rem" }}>
              {" "}
              (10% de desconto){" "}
            </Paragraph>
          </div>
          <Paragraph>ou 12x de R${data.parcela12} sem juros</Paragraph>
          <RateTitle style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
            A Genshop garante a sua compra, do pedido à entrega.
          </RateTitle>
        </Description>
        <BoxCard>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ProductTitle
              style={{
                fontSize: "1.1rem",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Cartão de credito
            </ProductTitle>
            <RateTitle
              style={{ fontSize: "0.9rem", color: "#404040", fontWeight: 400 }}
            >
              R$ {data.antPrice}
            </RateTitle>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <RateTitle
              style={{ fontSize: "0.9rem", color: "#404040", fontWeight: 400 }}
            >
              sem juros
            </RateTitle>
            <RateTitle
              style={{ fontSize: "0.9rem", color: "#404040", fontWeight: 500 }}
            >
              6x de R$ {data.parcela6}
            </RateTitle>
          </div>
        </BoxCard>

        <BoxFrete>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <img src={LocIcon} />
            <RateTitle
              style={{ fontSize: "1rem", color: "#404040", fontWeight: 400 }}
            >
              Frete grátis para todo brasil
            </RateTitle>
          </div>
        </BoxFrete>

        <BuyBtn onClick={() => navigate("/checkout")}>
          <div style={{ justifySelf: "start", display: "flex" }}>
            <img src={Shopping} alt="Carrinho" />
          </div>
          Comprar agora
        </BuyBtn>

        <div style={{ marginTop: "2rem" }}>
          <ProductTitle style={{ fontSize: "1rem" }}>
            Informações do produto
          </ProductTitle>

          <RateTitle
            style={{
              fontSize: "0.9rem",
              marginTop: "0.5rem",
              maxWidth: "100%",
            }}
          >
            {data.productInfo}
          </RateTitle>
        </div>

        <Footer>
          <WarrantyBox>
            <img src={Shield} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <WarrantyDescription>
                Frete Grátis Para Todo o Brasil
              </WarrantyDescription>
              <WarrantyDescription>
                Receba seu pedido no conforto da sua casa com entrega garantida
                e segurada pelos Correios.
              </WarrantyDescription>
            </div>
          </WarrantyBox>

          <WarrantyBox>
            <img src={Package} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <WarrantyDescription>
                Frete Grátis Para Todo o Brasil
              </WarrantyDescription>
              <WarrantyDescription>
                Receba seu pedido no conforto da sua casa com entrega garantida
                e segurada pelos Correios.
              </WarrantyDescription>
            </div>
          </WarrantyBox>
        </Footer>
      </Container>
    </>
  );
}
