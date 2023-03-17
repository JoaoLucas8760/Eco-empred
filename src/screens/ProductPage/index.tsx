import React, { useContext, useState } from "react";
import Header from "./components/Header";
import {
  BoxCard,
  BoxFrete,
  BoxImage,
  BuyBtn,
  Container,
  Description,
  Footer,
  FooterContainer,
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
import LocIcon from "./assets/loc.svg";
import Shield from "./assets/shield-check.svg";
import Package from "./assets/package.svg";

import { Gradient } from "./components/Header/styles";
import Checkout from "../../components/Checkout/Index";

export default function ProductPage({
  productName,
  productInfo,
  imageUrl,
  previousPrice,
  price,
  parcel12x,
  parcel6x,
}: any) {
  const [checkoutActive, setCheckoutActive] = useState(false);

  return (
    <>
      {checkoutActive === true ? (
        <Checkout price={price} productName={productName} imageUrl={imageUrl} />
      ) : (
        <>
          {" "}
          <Header />
          <Container>
            <Img src={imageUrl} />

            <ProductTitle>{productName}</ProductTitle>

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
                R$ {previousPrice}
              </RateTitle>
              <ProductTitle style={{ marginTop: "-0.2rem" }}>
                R$ {price}
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
              <Paragraph>ou 12x de R${parcel12x} sem juros</Paragraph>
              <RateTitle style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
                A Varietieshop garante a sua compra, do pedido à entrega.
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
                  style={{
                    fontSize: "0.9rem",
                    color: "#404040",
                    fontWeight: 400,
                  }}
                >
                  R$ {previousPrice}
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
                  style={{
                    fontSize: "0.9rem",
                    color: "#404040",
                    fontWeight: 400,
                  }}
                >
                  sem juros
                </RateTitle>
                <RateTitle
                  style={{
                    fontSize: "0.9rem",
                    color: "#404040",
                    fontWeight: 500,
                  }}
                >
                  6x de R$ {parcel6x}
                </RateTitle>
              </div>
            </BoxCard>

            <BoxFrete>
              <div
                style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
              >
                <img src={LocIcon} />
                <RateTitle
                  style={{
                    fontSize: "1rem",
                    color: "#404040",
                    fontWeight: 400,
                  }}
                >
                  Frete grátis para todo brasil
                </RateTitle>
              </div>
            </BoxFrete>

            <BuyBtn onClick={() => setCheckoutActive(true)}>
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
                {productInfo}
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
                  <WarrantyDescription>Compra Segura</WarrantyDescription>
                  <WarrantyDescription>
                    Ambiente seguro e certificado pela Norton™
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
                    Receba seu pedido no conforto da sua casa com entrega
                    garantida e segurada pelos Correios.
                  </WarrantyDescription>
                </div>
              </WarrantyBox>
            </Footer>
            <div style={{}}></div>
          </Container>
          <Gradient></Gradient>
        </>
      )}
    </>
  );
}
