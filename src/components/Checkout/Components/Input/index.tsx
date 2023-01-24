import React from "react";
import { Container, Label, InputStyle } from "./styles";

interface props {
  label?: string;
  value: string;
  onChange: any;
  placeholder: string;
  width?: string;
  maxLength?: number;
  type?: string;
}

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  width,
  maxLength,
  type,
}: props) {
  return (
    <Container>
      <Label>{label}</Label>

      <InputStyle
        style={{
          padding: "1rem",

          borderRadius: "0.3rem",
          width: width,
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        required
        type={type}
      />
    </Container>
  );
}
