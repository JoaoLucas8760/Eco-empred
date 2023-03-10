import React, { useState } from "react";

import {
  Card,
  Container,
  Content,
  Footer,
  Header,
  Img,
  LineCards,
  SubDescription,
  Title,
  WarrantyBox,
  WarrantyContainer,
} from "./styles";
import CompraSeguraIcon from "../../assets/CompraSegura.svg";
import CompraSeguraIconBottom from "../../assets/BottomCompraSegura.svg";
import StarIcon from "../../assets/star.svg";
import Steps from "./Components/Steps";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import { Subtitle } from "./Components/Form1/styles";
import Resume from "./Components/Resume";
import Form3 from "./Components/Form3";
import FormContext from "./../../context/FormContext";

interface Props {
  imageUrl: String;
  productName: String;
  price: String;
}

export default function Checkout({ imageUrl, productName, price }: Props) {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState();
  return (
    <FormContext.Provider value={{ formValues, setFormValues }}>
      <Container>
        <Header>
          <img src={CompraSeguraIcon} />
        </Header>

        <Content>
          <Steps
            step={step}
            setStep1={() => setStep(1)}
            setStep2={() => setStep(2)}
            setStep3={() => setStep(3)}
          />

          <Resume imageUrl={imageUrl} productName={productName} price={price} />

          {step === 1 && <Form1 handleSubmitForm={() => setStep(2)} />}
          {step === 2 && <Form2 handleSubmitForm={() => setStep(3)} />}
          {step === 3 && <Form3 handleSubmitForm={() => setStep(3)} />}

          <WarrantyContainer>
            <WarrantyBox>
              <Img
                src="//images.yampi.me/assets/stores/loja-ecomm-prime/uploads/testimonies/63c189dc27df1.png"
                alt=""
              />

              <SubDescription>
                <div>
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                </div>
                <Title>2 ANOS DE MERCADO</Title>
                <Subtitle>
                  Oferecemos nossos produtos <br />
                  online desde 2020, com mais de <br />
                  40 mil clientes atendidos neste <br />
                  período.
                </Subtitle>
              </SubDescription>
            </WarrantyBox>

            <WarrantyBox>
              <Img
                src="//images.yampi.me/assets/stores/loja-ecomm-prime/uploads/testimonies/63c18a200834b.jpeg"
                alt=""
              />

              <SubDescription>
                <div>
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                </div>
                <Title>RECLAME AQUI</Title>
                <Subtitle>
                  Possuímos um excelente índice <br /> de atendimento.
                  Compromisso
                  <br />
                  com o pós venda, elevando o <br />
                  grau de confiança em nossa <br /> marca e produtos.
                </Subtitle>
              </SubDescription>
            </WarrantyBox>

            <WarrantyBox style={{ borderBottom: "none", marginBottom: "0" }}>
              <Img
                src="//images.yampi.me/assets/stores/loja-ecomm-prime/uploads/testimonies/63c18a2fe667f.png"
                alt=""
              />

              <SubDescription>
                <div>
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                </div>
                <Title>2 ANOS DE MERCADO</Title>
                <Subtitle>
                  Todas nossas avaliações no <br /> Facebook e Google são 100%
                  <br />
                  positivas, firmando nosso <br /> compromisso com a excelência
                  <br />
                  no atendimento e alto padrão <br /> dos produtos.
                </Subtitle>
              </SubDescription>
            </WarrantyBox>
          </WarrantyContainer>

          <Footer>
            <Title style={{ fontWeight: "400", fontSize: "1.1rem" }}>
              Formas de pagamento
            </Title>

            <LineCards>
              <Card src="https://icons.yampi.me/svg/card-amex.svg" />
              <Card src="https://icons.yampi.me/svg/card-visa.svg" />
              <Card src="https://icons.yampi.me/svg/card-diners.svg" />
              <Card src="https://icons.yampi.me/svg/card-mastercard.svg" />
              <Card src="https://icons.yampi.me/svg/card-discover.svg" />
              <Card src="https://icons.yampi.me/svg/card-aura.svg" />
              <Card src="https://icons.yampi.me/svg/card-hipercard.svg" />
              <Card src="https://icons.yampi.me/svg/card-elo.svg" />
              <Card src="https://icons.yampi.me/svg/card-billet.svg" />
              <Card src="https://icons.yampi.me/svg/card-hiper.svg" />
              <Card src="https://icons.yampi.me/svg/card-pix.svg" />
            </LineCards>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <Title style={{ fontWeight: "400", fontSize: "0.9rem" }}>
                Varietieshop:varietieshop.com.br
              </Title>
              <Title style={{ fontWeight: "400", fontSize: "0.9rem" }}>
                R Juiz Ord Francisco X C Pessoa, 47 - Otacio de Lemos Limoeiro -
                PE
              </Title>
              <Title style={{ fontWeight: "400", fontSize: "0.9rem" }}>
                © 2023 D DE A FERREIRA SERVIÇOS CNPJ: 48.126.350/0001-25
              </Title>
              <Title style={{ fontWeight: "400", fontSize: "0.9rem" }}>
                Whatsapp: (11) 95109-1306 E-mail: contato@varieshops.com.br
              </Title>
            </div>
            <img
              style={{ marginBottom: "2rem" }}
              src={CompraSeguraIconBottom}
            />
          </Footer>
        </Content>
      </Container>
    </FormContext.Provider>
  );
}
