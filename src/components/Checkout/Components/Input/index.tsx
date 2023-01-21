import React from "react";
import { Container, Label } from "./styles";

interface props {
  label: string;
  value: string;
  onChange: any;
  placeholder: string;
  width?: string;
  maxLength?: number;
}

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  width,
  maxLength,
}: props) {
  return (
    <Container>
      <Label>{label}</Label>

      <input
        style={{
          padding: "1rem",
          border: "1px solid #D0D0D0",
          borderRadius: "0.3rem",
          width: width,
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        required
      />
    </Container>
  );
}
