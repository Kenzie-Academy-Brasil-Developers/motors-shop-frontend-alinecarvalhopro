import { useState } from "react";
import { StyledHeader } from "./header.styled";
import Logo from "../../assets/logo.png";
import MenuButton from "../../assets/menu.svg";
import CloseMenuButton from "../../assets/cross.svg";
import { TextBody1 } from "../Text/text.styled";
import Button from "../Button/Button";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHeader>
      <nav className="navBar">
        <img className="logo" src={Logo} />
        <div className="webMenu">
          <Button
            width="133px"
            margin="16px 0"
            backgroundColor="var(--color-whiteFixed)"
            borderColor="var(--color-whiteFixed)"
            textColor="var(--color-greyScale-0)"
            backgroundColorHover="var(--color-greyScale-0)"
            title="Fazer Login"
          />
          <Button
            width="133px"
            margin="16px 0"
            backgroundColor="var(--color-whiteFixed)"
            borderColor="var(--color-greyScale-4)"
            textColor="var(--color-greyScale-0)"
            backgroundColorHover="var(--color-greyScale-0)"
            title="Cadastrar"
          />
        </div>
        <img
          className={"menuHamburguer"}
          src={menuOpen ? CloseMenuButton : MenuButton}
          onClick={toggleMenu}
        />
      </nav>
      {menuOpen && (
        <div className="mobileMenu">
          <TextBody1>Fazer Login</TextBody1>
          <Button
            margin="16px 0"
            backgroundColor="var(--color-whiteFixed)"
            borderColor="var(--color-greyScale-4)"
            textColor="var(--color-greyScale-0)"
            backgroundColorHover="var(--color-greyScale-0)"
            title="Cadastrar"
          />
        </div>
      )}
    </StyledHeader>
  );
};
