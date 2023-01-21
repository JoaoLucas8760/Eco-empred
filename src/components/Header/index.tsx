import {
  Title,
  Container,
  Input,
  BtnPesquisar,
  ContainerSearch,
  BtnCart,
  ActionsContainer,
} from "./styles";

import CartIcon from "../../assets/Cart.svg";
import LupaIcon from "../../assets/Lupa.svg";

export default function Header() {
  return (
    <Container>
      <Title>LOGO</Title>

      <ActionsContainer>
        <ContainerSearch>
          <Input placeholder="Pesquisar..." />
          <BtnPesquisar>
            <img src={LupaIcon} />
          </BtnPesquisar>
        </ContainerSearch>

        <BtnCart>
          <img src={CartIcon} />
        </BtnCart>
      </ActionsContainer>
    </Container>
  );
}
