import React, { useContext, useState } from "react";
import {
  BoxImage,
  BoxQuantidade,
  BoxResume,
  BoxTitleResume,
  BtnAddCupom,
  BtnQuantidade,
  Container,
  ContainerDescription,
  Img,
  InputCupom,
  OpenContainer,
  Price,
  ResumeTitlte,
  SubTitle,
  Title,
} from "./styles";
import IconCaretDown from "../../../../assets/caret-down-bold.svg";
import IconCaretUp from "../../../../assets/caret-up-bold.svg";
import iconMinus from "../../../../assets/minus.svg";
import iconPlus from "../../../../assets/plus-light.svg";
import { ProductBox } from "../../styles";

interface props {
  imageUrl: String;
  productName: String;
  price: any;
}
export default function Resume({ imageUrl, productName, price }: props) {
  const [openResume, setOpenResume] = useState(false);
  const [quantidade, setQuantidade] = useState(1);

  return (
    <>
      {openResume === false ? (
        <Container>
          <div
            style={{ display: "flex", gap: "0.3rem", flexDirection: "column" }}
          >
            <Title> RESUMO</Title>
            <SubTitle style={{ fontSize: "1rem" }}>
              Informações da sua compra
            </SubTitle>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Price>R$ {price}</Price>

            {openResume === false && (
              <Img src={IconCaretDown} onClick={() => setOpenResume(true)} />
            )}
          </div>
        </Container>
      ) : (
        <OpenContainer>
          <div
            style={{
              paddingBottom: "1.5rem",
              borderBottom: "1px solid #eeeeee",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <Title> RESUMO</Title>
              <Img src={IconCaretUp} onClick={() => setOpenResume(false)} />
            </div>

            <ProductBox>
              <div style={{ height: "7rem" }}>
                <BoxImage>
                  <img
                    style={{
                      width: "4rem",
                      height: "4rem",
                      objectFit: "cover",
                    }}
                    src={`${imageUrl}`}
                    alt=""
                  />
                </BoxImage>
              </div>

              <ContainerDescription>
                <SubTitle>{productName}</SubTitle>

                <Title style={{ fontSize: "1rem" }}>R$ {price}</Title>

                <BoxQuantidade>
                  <BtnQuantidade
                    onClick={() => {
                      if (quantidade < 2) {
                        return;
                      }
                      setQuantidade(quantidade - 1);
                    }}
                  >
                    <img src={iconMinus} />
                  </BtnQuantidade>
                  <SubTitle>{quantidade}</SubTitle>
                  <BtnQuantidade onClick={() => setQuantidade(quantidade + 1)}>
                    <img src={iconPlus} />
                  </BtnQuantidade>
                </BoxQuantidade>
              </ContainerDescription>
            </ProductBox>
          </div>

          <Title style={{ fontSize: "0.9rem" }}>Tem um cupom?</Title>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <InputCupom type="text" placeholder="Código do cupom" />
            <BtnAddCupom>Adicionar</BtnAddCupom>
          </div>

          <BoxResume>
            <BoxTitleResume>
              <ResumeTitlte>Produto</ResumeTitlte>
              <ResumeTitlte>R$ {price}</ResumeTitlte>
            </BoxTitleResume>
            <BoxTitleResume>
              <ResumeTitlte>Frete</ResumeTitlte>
              <ResumeTitlte>Gratis</ResumeTitlte>
            </BoxTitleResume>

            <BoxTitleResume>
              <ResumeTitlte>Descontos</ResumeTitlte>
              <ResumeTitlte>- R$ 0,00</ResumeTitlte>
            </BoxTitleResume>

            <BoxTitleResume style={{ marginTop: "1rem" }}>
              <ResumeTitlte style={{ color: "#44c485" }}>Total</ResumeTitlte>
              <ResumeTitlte style={{ color: "#44c485" }}>
                R$ {parseInt(price) * quantidade}
              </ResumeTitlte>
            </BoxTitleResume>
          </BoxResume>
        </OpenContainer>
      )}
    </>
  );
}
