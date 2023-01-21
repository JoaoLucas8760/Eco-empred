import React, { useState } from "react";
import {
  Container,
  Carrosel,
  Info,
  Title,
  Price,
  PriceValues,
  NewPrice,
  Strong,
  InfoTop,
  Economia,
  EconomiaText,
  CollunmImagens,
  ImageFull,
  InfoDown,
  Cor,
  Quantidade,
  BtnQuantidade,
  DisplayQuantidade,
  TitleBtn,
  CardPayments,
  LineCards,
  TopCardPayments,
  DownCardPayments,
  DeliveryContainer,
  LineInfo,
  IconBox,
  Icons,
  String,
} from "./styles";
import CrediIcon from "../../assets/credit-card.svg";
import starIcon from "../../assets/star-fill.svg";
import TruckIcon from "../../assets/truck-thin.svg";
import ClockIcon from "../../assets/clock-thin.svg";
import medalIcon from "../../assets/medal-thin.svg";
import CounterIcon from "../../assets/counter.svg";
import Descripion from "./components/Description/Description";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

interface props {
  Titulo: String;
  antPrice: String;
  newPrice: String;
  parcelas: String;
  economiade: String;
}

export default function Body({
  Titulo,
  antPrice,
  newPrice,
  parcelas,
  economiade,
}: props) {
  const [quantidade, setQuantidade] = useState(1);
  const [imgSelected, setImgSelected] = useState(1);
  const [corSelected, setCorSelected] = useState(1);

  const navigation = useNavigate();

  function increment() {
    setQuantidade(quantidade + 1);
  }

  function decrement() {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  }

  return (
    <>
      <Header />

      <Container>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Carrosel>
            <CollunmImagens>
              {imgSelected === 1 ? (
                <div
                  style={{
                    border: "2px solid yellow",
                    borderRadius: "0.2rem",
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src="https://cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_130x.jpg?v=1670022646://cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_400x.jpg?v=1670022646%20400w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_500x.jpg?v=1670022646%20500w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_600x.jpg?v=1670022646%20600w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_700x.jpg?v=1670022646%20700w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_800x.jpg?v=1670022646%20800w
        "
                    alt="1"
                  />
                </div>
              ) : (
                <div
                  onClick={() => setImgSelected(1)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src="https://cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_130x.jpg?v=1670022646://cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_400x.jpg?v=1670022646%20400w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_500x.jpg?v=1670022646%20500w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_600x.jpg?v=1670022646%20600w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_700x.jpg?v=1670022646%20700w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_800x.jpg?v=1670022646%20800w
        "
                    alt="1"
                  />
                </div>
              )}

              {imgSelected === 2 ? (
                <div
                  style={{
                    border: "2px solid yellow",
                    borderRadius: "0.2rem",
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src="https://cdn.shopify.com/s/files/1/0681/7136/6685/products/Hf4cd2f62f3a148ff88e5113377dd031dj_130x.jpg?v=1670022647"
                    alt="2"
                  />
                </div>
              ) : (
                <div
                  onClick={() => setImgSelected(2)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src="https://cdn.shopify.com/s/files/1/0681/7136/6685/products/Hf4cd2f62f3a148ff88e5113377dd031dj_130x.jpg?v=1670022647"
                    alt="2"
                  />
                </div>
              )}
            </CollunmImagens>
            <ImageFull>
              {imgSelected === 1 && (
                <img
                  style={{ width: "100%" }}
                  src="https://cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_400x.jpg?v=1670022646%20400w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_500x.jpg?v=1670022646%20500w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_600x.jpg?v=1670022646%20600w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_700x.jpg?v=1670022646%20700w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_800x.jpg?v=1670022646%20800w"
                  alt=""
                />
              )}
              {imgSelected === 2 && (
                <img
                  style={{ width: "100%" }}
                  src="https://cdn.shopify.com/s/files/1/0681/7136/6685/products/Hf4cd2f62f3a148ff88e5113377dd031dj_400x.jpg?v=1670022647%20400w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/Hf4cd2f62f3a148ff88e5113377dd031dj_500x.jpg?v=1670022647%20500w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/Hf4cd2f62f3a148ff88e5113377dd031dj_600x.jpg?v=1670022647%20600w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/Hf4cd2f62f3a148ff88e5113377dd031dj_700x.jpg?v=1670022647%20700w,%20//cdn.shopify.com/s/files/1/0681/7136/6685/products/Hf4cd2f62f3a148ff88e5113377dd031dj_800x.jpg?v=1670022647%20800w%22"
                  alt="full"
                />
              )}
            </ImageFull>
          </Carrosel>

          <Descripion />
        </div>

        <Info>
          <InfoTop>
            <Title>{Titulo}</Title>
            <div style={{ display: "flex" }}>
              <Price>Preço: </Price>
              <PriceValues>
                <Price
                  style={{
                    color: "#677279",
                    textDecoration: "line-through",
                    fontWeight: "400",
                  }}
                >
                  R$ {antPrice}
                </Price>

                <NewPrice>R$ {newPrice}</NewPrice>
                <div
                  style={{ display: "flex", gap: "4px", alignItems: "center" }}
                >
                  <img src={CrediIcon} />
                  <Price style={{ color: "#464646", fontSize: "0.8rem" }}>
                    Ou
                  </Price>
                  <Strong>10x</Strong>
                  <Price style={{ color: "#464646", fontSize: "0.8rem" }}>
                    de
                  </Price>
                  <Strong style={{ color: "#124daf" }}>R$ {parcelas}</Strong>
                  <Price style={{ color: "#464646", fontSize: "0.9rem" }}>
                    S/ Juros
                  </Price>
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: "1rem",
                    alignItems: "center",
                  }}
                >
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <Price
                    style={{
                      color: "#464646",
                      fontSize: "0.8rem",
                      marginLeft: "5px",
                    }}
                  >
                    5.0
                  </Price>
                  <Price
                    style={{
                      color: "#464646",
                      fontSize: "0.8rem",
                      marginLeft: "5px",
                    }}
                  >
                    (17 avaliações)
                  </Price>
                </div>
                <Economia>
                  <EconomiaText>ECONOMIA DE R$ {economiade}</EconomiaText>
                </Economia>
              </PriceValues>
            </div>
          </InfoTop>

          <InfoDown>
            <Cor>
              <div style={{ display: "flex" }}>
                <Price>Cor:</Price>

                <Price
                  style={{
                    color: "#677279",
                    marginLeft: "0.5rem",

                    fontWeight: "400",
                  }}
                >
                  {corSelected === 1 && "Preto"}
                  {corSelected === 2 && "Verde"}
                </Price>
              </div>
              <div style={{ display: "flex", marginTop: "1rem" }}>
                {corSelected === 1 ? (
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      padding: "0.5rem",
                      border: "2px solid yellow",
                      borderRadius: "0.2rem",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_130x.jpg?v=1670022646"
                      alt=""
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => setCorSelected(1)}
                    style={{
                      width: "4rem",
                      height: "4rem",
                      padding: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://cdn.shopify.com/s/files/1/0681/7136/6685/products/H296bdd622ece4a4dbd3b6c666b4d8baeU_130x.jpg?v=1670022646"
                      alt=""
                    />
                  </div>
                )}
                {corSelected === 2 ? (
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      padding: "0.5rem",
                      border: "2px solid yellow",
                      borderRadius: "0.2rem",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://cdn.shopify.com/s/files/1/0681/7136/6685/products/Hf4cd2f62f3a148ff88e5113377dd031dj_130x.jpg?v=1670022647"
                      alt=""
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => setCorSelected(2)}
                    style={{
                      width: "4rem",
                      height: "4rem",
                      padding: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://cdn.shopify.com/s/files/1/0681/7136/6685/products/Hf4cd2f62f3a148ff88e5113377dd031dj_130x.jpg?v=1670022647"
                      alt=""
                    />
                  </div>
                )}
              </div>
            </Cor>

            <Quantidade>
              <Price>Quantidade:</Price>
              <div style={{ display: "flex", fontWeight: "300" }}>
                <BtnQuantidade onClick={decrement}>
                  <Price style={{ color: "#677279" }}>-</Price>
                </BtnQuantidade>
                <DisplayQuantidade>
                  <Price style={{ fontWeight: "400" }}>{quantidade}</Price>
                </DisplayQuantidade>
                <BtnQuantidade onClick={increment}>
                  <Price style={{ color: "#677279", fontWeight: "300" }}>
                    +
                  </Price>
                </BtnQuantidade>
              </div>
            </Quantidade>
          </InfoDown>

          <TitleBtn
            onClick={() => {
              navigation("/checkout");
            }}
          >
            Comprar Agora
          </TitleBtn>

          <CardPayments>
            <TopCardPayments>
              <LineCards>
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="//cdn.shopify.com/s/files/1/0681/7136/6685/t/6/assets/visa.svg?v=43396516388255831211669596770"
                />
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="https://cdn.shopify.com/s/files/1/0681/7136/6685/t/6/assets/master.svg?v=163550031558387206931669596769"
                />
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="https://cdn.shopify.com/s/files/1/0681/7136/6685/t/6/assets/celo.svg?v=157196844453194241601669596768"
                />
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="https://cdn.shopify.com/s/files/1/0681/7136/6685/t/6/assets/picpay.svg?v=76075902937102483381669596770"
                />
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="https://cdn.shopify.com/s/files/1/0681/7136/6685/t/6/assets/mp.svg?v=148275419576865403601669596769"
                  alt="Mercado Pago"
                />
              </LineCards>
              <Price
                style={{
                  color: "#464646",
                  fontSize: "0.8rem",
                  marginLeft: "5px",
                  display: "flex",
                  marginBottom: "0.5rem",
                  fontWeight: "400",
                }}
              >
                Até{" "}
                <strong
                  style={{
                    color: "black",
                    fontSize: "0.9rem",
                    marginLeft: "5px",
                  }}
                >
                  12x
                </strong>
              </Price>
            </TopCardPayments>

            <DownCardPayments>
              <LineCards>
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="//cdn.shopify.com/s/files/1/0681/7136/6685/t/6/assets/boleto.svg?v=29042640155392895611669596768"
                />
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="//cdn.shopify.com/s/files/1/0681/7136/6685/t/6/assets/pix.svg?v=16211414789327646621669596770"
                />
              </LineCards>
              <Price
                style={{
                  color: "#677279",
                  fontSize: "0.9rem",

                  fontWeight: "400",
                }}
              >
                R$ {newPrice}
              </Price>
            </DownCardPayments>
          </CardPayments>

          <DeliveryContainer>
            <LineInfo>
              <IconBox>
                <Icons src={TruckIcon} />
              </IconBox>
              <String
                style={{
                  color: "#2568d9",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Frete Grátis
              </String>
              <String style={{ marginLeft: "-0.7rem" }}>Para todo o</String>
              <String
                style={{
                  color: "#2568d9",
                  fontSize: "1rem",
                  fontWeight: "600",
                  marginLeft: "-0.7rem",
                }}
              >
                Brasil
              </String>
            </LineInfo>

            <LineInfo>
              <IconBox>
                <Icons src={ClockIcon} />
              </IconBox>
              <String>previsão de entrega: </String>
              <String
                style={{
                  color: "black",
                  fontSize: "1rem",
                  fontWeight: "500",
                  marginLeft: "-0.8rem",
                }}
              >
                8 a 16 Dias
              </String>
            </LineInfo>

            <LineInfo>
              <IconBox>
                <Icons src={medalIcon} />
              </IconBox>
              <String style={{ fontSize: "1rem" }}>
                Garantaia de 30 dias direto em nossa loja
              </String>
            </LineInfo>

            <LineInfo>
              <IconBox>
                <Icons src={CounterIcon} />
              </IconBox>
              <String style={{ fontSize: "1rem" }}>
                7 dias para trocas e devoluções
              </String>
            </LineInfo>
          </DeliveryContainer>
        </Info>
      </Container>
    </>
  );
}
