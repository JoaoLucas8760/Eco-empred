import React, { useEffect, useState } from "react";
import Input from "../Input";
import {
  BoxStep,
  BtnContinuar,
  BtnSearch,
  Container,
  ContainerInputs,
  IndexStep,
  Subtitle,
  Title,
  Top,
} from "./styles";

interface DataProps {
  localidade: string;
  uf: string;
  logradouro: string;
  bairro: string;
  erro?: boolean;
}

export default function Form2() {
  const [cepValue, setCepValue] = useState("");
  const [adressValue, setAdressValue] = useState("");
  const [numeroValue, setNumeroValue] = useState("");
  const [bairroValue, setBairroValue] = useState("");
  const [complementoValue, setCompletoValue] = useState("");
  const [destinatarioValue, setDestinatarioValue] = useState("");
  const [data, setData] = useState<DataProps>();

  async function GetCep() {
    await fetch(`https://viacep.com.br/ws/${cepValue}/json//`)
      .then((response) => {
        response.json().then((res) => setData(res));
      })
      .catch((err) => console.log("CEP INVALiDO"));
  }
  if (cepValue.length === 9) {
    GetCep();
  }

  useEffect(() => {
    if (data) {
      setAdressValue(data.logradouro);
      setBairroValue(data.bairro);
    }
  }, [data]);

  return (
    <Container>
      <Top>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <BoxStep>
            <IndexStep>2</IndexStep>
          </BoxStep>

          <Title>Entrega</Title>
        </div>
        <Subtitle>Cadastre ou selecione um endereço</Subtitle>
      </Top>

      <ContainerInputs>
        <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
          <Input
            label="CEP"
            placeholder="00000-000"
            value={cepValue}
            onChange={({ target }: any) => {
              let value = target.value;
              value = value.replace(/^(\d{5})(\d)/, "$1-$2");
              setCepValue(value);
            }}
            width={"100%"}
            maxLength={9}
          />

          {/* {data ? undefined : (
            <BtnSearch onClick={GetCep} style={{ marginTop: "1.2rem" }}>
              Buscar
            </BtnSearch>
          )} */}

          {/* {data && (
            <Subtitle style={{ marginTop: "1.2rem" }}>
              {data.localidade} / {data.uf}
            </Subtitle>
          )} */}
          {data != undefined && data.erro ? (
            <Subtitle
              style={{
                marginTop: "1.2rem",
                color: "#e50f38",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              CEP INVALIDO
            </Subtitle>
          ) : (
            <Subtitle style={{ marginTop: "1.2rem" }}>
              {data != undefined && data.localidade + " /"}{" "}
              {data != undefined && data.uf}
            </Subtitle>
          )}
        </div>

        {data != undefined && !data.erro ? (
          <ContainerInputs>
            <Input
              label="Endereço"
              placeholder=""
              value={adressValue}
              onChange={({ target }: any) => {
                setAdressValue(target.value);
              }}
              width={"93%"}
            />

            <div style={{ display: "flex" }}>
              <Input
                label="Número"
                placeholder=""
                value={numeroValue}
                onChange={({ target }: any) => {
                  setNumeroValue(target.value);
                }}
                width={"70%"}
              />

              <Input
                label="Bairro"
                placeholder=""
                value={bairroValue}
                onChange={({ target }: any) => {
                  setBairroValue(target.value);
                }}
                width={"90%"}
              />
            </div>

            <Input
              label="Complemento"
              placeholder=""
              value={complementoValue}
              onChange={({ target }: any) => {
                setCompletoValue(target.value);
              }}
              width={"93%"}
            />

            <Input
              label="Destinatario"
              placeholder=""
              value={destinatarioValue}
              onChange={({ target }: any) => {
                setDestinatarioValue(target.value);
              }}
              width={"93%"}
            />

            <BtnContinuar onClick={GetCep}>Salvar</BtnContinuar>
          </ContainerInputs>
        ) : undefined}
      </ContainerInputs>
    </Container>
  );
}
