import React from "react";
import Header from "./components/Header";
import {
  BoxImage,
  Container,
  Img,
  ProductTitle,
  Rates,
  RateTitle,
} from "./styles";
import StarIcon from "./assets/star.svg";
import ShareIcon from "./assets/share-icon.svg";
import HeartIcon from "./assets/heart-icon.svg";
import Descripion from "../../components/Carrosel/components/Description/Description";

const data = {
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

        <Descripion></Descripion>
      </Container>
    </>
  );
}
