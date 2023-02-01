import React from "react";
import { Container, Gradient, Icon, Input, Logo } from "./styles";

import Navbar from "../../assets/navbar.svg";

import MagaluLogo from "../../assets/magalu-logo.svg";
import Shopping from "../../assets/shopping-icon.svg";
import SearchIcon from "../../assets/search-icon.svg";

export default function Header() {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <Icon src={Navbar} alt="navbar" />
          <Logo src={MagaluLogo} alt="LOGO" />
          <Icon src={Shopping} alt="Carrinho" />
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Icon style={{}} src={SearchIcon} />
          <Input placeholder="Buscar no magalu" />
        </div>
      </Container>
      <Gradient></Gradient>
    </>
  );
}
