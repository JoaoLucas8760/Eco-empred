import React from "react";
import Header from "./components/Header";
import {
  BoxImage,
  Container,
  Description,
  Img,
  Paragraph,
  ProductTitle,
  Rates,
  RateTitle,
} from "./styles";
import StarIcon from "./assets/star.svg";
import ShareIcon from "./assets/share-icon.svg";
import HeartIcon from "./assets/heart-icon.svg";
import Descripion from "../../components/Carrosel/components/Description/Description";

const data = {
  antPrice: "190,59",
  Price: "130,46",
  parcela12: "10,87",
  title: "Alexa Echodot Amazon 3 Geração Black",
  ImageUrl1:
    "https://a-static.mlcdn.com.br/450x450/alexa-echodot-amazon-3-geracao-black/oliststore/mglol6o8u7lsirol/57b1490592d84bbe6b9509757b024c35.jpeg",
};

export default function ProductPage() {
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
        </Description>
      </Container>
    </>
  );
}
