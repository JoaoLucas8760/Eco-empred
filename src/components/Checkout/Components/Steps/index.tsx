import React from "react";
import {
  Box,
  Container,
  IndexStep,
  Step,
  StepActive,
  Title,
  TitleActive,
} from "./styles";

interface props {
  step: Number;
  setStep1: () => void;
  setStep2: () => void;
  setStep3: () => void;
}

export default function Steps({ step, setStep1, setStep2, setStep3 }: props) {
  return (
    <Container>
      {step === 1 ? (
        <Box>
          <StepActive onClick={setStep1}>
            <IndexStep>1</IndexStep>
          </StepActive>
          <TitleActive>Informações pessoais</TitleActive>
        </Box>
      ) : (
        <Box>
          <Step onClick={setStep1}>
            <IndexStep>1</IndexStep>
          </Step>
          <Title>Informações pessoais</Title>
        </Box>
      )}
      {step === 2 ? (
        <Box>
          <StepActive onClick={setStep2}>
            <IndexStep>2</IndexStep>
          </StepActive>
          <TitleActive>Entrega</TitleActive>
        </Box>
      ) : (
        <Box>
          <Step onClick={setStep2}>
            <IndexStep>2</IndexStep>
          </Step>
          <Title>Entrega</Title>
        </Box>
      )}
      {step === 3 ? (
        <Box>
          <StepActive onClick={setStep3}>
            <IndexStep>3</IndexStep>
          </StepActive>
          <TitleActive>Pagamento</TitleActive>
        </Box>
      ) : (
        <Box>
          <Step onClick={setStep3}>
            <IndexStep>3</IndexStep>
          </Step>
          <Title>Pagamento</Title>
        </Box>
      )}
    </Container>
  );
}
