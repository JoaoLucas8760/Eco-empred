import React from "react";
import Header from "./components/Header";
import { BoxImage, Container, Img } from "./styles";

const data = {
  ImageUrl:
    "https://a-static.mlcdn.com.br/450x450/alexa-echodot-amazon-3-geracao-black/oliststore/mglol6o8u7lsirol/57b1490592d84bbe6b9509757b024c35.jpeg",
};

export default function ProductPage() {
  return (
    <Container>
      <Header />

      <Img src={data.ImageUrl} />
    </Container>
  );
}
