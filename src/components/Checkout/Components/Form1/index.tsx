import React, { useContext, useState } from "react";
import FormContext from "../../../../context/FormContext";
import Input from "../Input";
import {
  BoxStep,
  BtnContinuar,
  Container,
  ContainerInputs,
  IndexStep,
  Subtitle,
  Title,
  Top,
} from "./styles";

interface props {
  handleSubmitForm: () => void;
}

export default function Form1({ handleSubmitForm }: props) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const [numberValue, setNumberValue] = useState("");

  const { formValues, setFormValues }: any = useContext(FormContext);
  console.log(formValues);

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setFormValues({
      fullname: nameValue,
      email: emailValue,
      cpf: cpfValue,
      celphoneNumber: numberValue,
    });
    handleSubmitForm();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Top>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <BoxStep>
            <IndexStep>1</IndexStep>
          </BoxStep>

          <Title>Indentifique-se</Title>
        </div>

        <Subtitle>
          Utilizaremos seu e-mail para: Identificar seu perfil, histórico de
          compra, notificação de pedidos e carrinho de compras.
        </Subtitle>
      </Top>

      <ContainerInputs>
        <Input
          label="Nome completo"
          placeholder="ex.: Maria de almeida Cruz"
          value={nameValue}
          onChange={({ target }: any) => {
            setNameValue(target.value);
          }}
          width={"93%"}
        />

        <Input
          label="E-mail"
          placeholder="ex.: maria@gmail.com"
          value={emailValue}
          onChange={({ target }: any) => {
            setEmailValue(target.value);
          }}
          width={"93%"}
        />

        <Input
          label="CPF"
          placeholder="000.000.000-00"
          value={cpfValue}
          onChange={({ target }: any) => {
            let value = target.value;
            setCpfValue(
              value
                .replace(/\D/g, "") // aceita somente caracteres numero.
                .replace(/(\d{3})(\d)/, "$1.$2") // () => permite criar grupos de captura.
                .replace(/(\d{3})(\d)/, "$1.$2") // $1, $2, $3 ... permite substituir a captura pela propria captura acrescida de algo
                .replace(/(\d{3})(\d{2})/, "$1-$2") // substitui '78910' por '789-10'.
                .replace(/(-\d{2})\d+?$/, "$1")
            );
          }}
          width={"60%"}
        />

        <Input
          label="Celular / WhatsApp"
          placeholder="(00) 00000-0000"
          value={numberValue}
          onChange={({ target }: any) => {
            let value = target.value;
            setNumberValue(
              value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "($1) - $2")
                .replace(/(\d{4})(\d)/, "$1-$2")
                .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
                .replace(/(\d{4})\d+?$/, "$1")
            );
          }}
          width={"60%"}
        />
      </ContainerInputs>

      <BtnContinuar>Continuar</BtnContinuar>
    </Container>
  );
}
