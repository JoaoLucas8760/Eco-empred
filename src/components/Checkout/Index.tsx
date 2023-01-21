import React, { useState } from "react";

import {
  Container,
  Content,
  Header,
  Img,
  SubDescription,
  Title,
  WarrantyBox,
  WarrantyContainer,
} from "./styles";
import CompraSeguraIcon from "../../assets/CompraSegura.svg";
import StarIcon from "../../assets/star.svg";
import Steps from "./Components/Steps";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import { Subtitle } from "./Components/Form1/styles";

export default function Checkout() {
  const [step, setStep] = useState(1);
  return (
    <Container>
      <Header>
        <h1 style={{ color: "black" }}>LOGO</h1>

        <img src={CompraSeguraIcon} />
      </Header>

      <Content>
        <Steps
          step={step}
          setStep1={() => setStep(1)}
          setStep2={() => setStep(2)}
          setStep3={() => setStep(3)}
        />

        {step === 1 && <Form1 handleSubmitForm={() => setStep(2)} />}
        {step === 2 && <Form2 />}

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
              <Title>2 ANOS DE MERCADO</Title>
              <Subtitle>
                Possuímos um excelente índice <br /> de atendimento. Compromisso
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
      </Content>
    </Container>
  );
}
