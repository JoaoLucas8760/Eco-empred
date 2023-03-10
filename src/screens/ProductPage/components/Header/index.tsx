import React from "react";
import { Container, Gradient, Icon, Input, Logo } from "./styles";

import Navbar from "../../assets/navbar.svg";

import Shopping from "../../assets/shopping-icon.svg";
import SearchIcon from "../../assets/search-icon.svg";
import GoVariedades from "../../assets/varietieshop.svg";

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
          {/* <div style={{ width: "60px", height: "13px", display: "flex" }}>
            
          </div> */}
          <div style={{ maxWidth: "20rem" }}>
            <Logo
              style={{
                maxWidth: "100%",
                justifyContent: "center",
              }}
              src={GoVariedades}
              alt="LOGO"
            />
          </div>
          <Icon src={Shopping} alt="Carrinho" />
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Icon style={{}} src={SearchIcon} />
          <Input placeholder="Buscar na loja" />
        </div>
      </Container>
      <Gradient></Gradient>
    </>
  );
}
