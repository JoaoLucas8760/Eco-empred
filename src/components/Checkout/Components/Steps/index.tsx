import React from "react";
import { Container, IndexStep, Step, StepActive } from "./styles";

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
        <StepActive onClick={setStep1}>
          <IndexStep>1</IndexStep>
        </StepActive>
      ) : (
        <Step onClick={setStep1}>
          <IndexStep>1</IndexStep>
        </Step>
      )}
      {step === 2 ? (
        <StepActive onClick={setStep2}>
          <IndexStep>2</IndexStep>
        </StepActive>
      ) : (
        <Step onClick={setStep2}>
          <IndexStep>2</IndexStep>
        </Step>
      )}
      {step === 3 ? (
        <StepActive onClick={setStep3}>
          <IndexStep>3</IndexStep>
        </StepActive>
      ) : (
        <Step onClick={setStep3}>
          <IndexStep>3</IndexStep>
        </Step>
      )}
    </Container>
  );
}
