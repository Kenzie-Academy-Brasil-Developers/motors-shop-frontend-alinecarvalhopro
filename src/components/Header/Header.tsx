import { useState } from "react";
import { StyledHeader } from "./header.styled";
import Logo from "../../assets/logo.png";
import MenuButton from "../../assets/menu.svg";
import CloseMenuButton from "../../assets/cross.svg";
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
          backgroundcolor="var(--color-whiteFixed)"
          bordercolor="var(--color-whiteFixed)"
          textcolor="var(--color-greyScale-0)"
          backgroundcolorhover="var(--color-greyScale-0)"
          title="Fazer Login"
        />
        <Button
          width="133px"
          margin="16px 0"
          backgroundcolor="var(--color-whiteFixed)"
          bordercolor="var(--color-greyScale-4)"
          textcolor="var(--color-greyScale-0)"
          backgroundcolorhover="var(--color-greyScale-0)"
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
        <Button
          width="133px"
          backgroundcolor="var(--color-whiteFixed)"
          bordercolor="var(--color-whiteFixed)"
          textcolor="var(--color-greyScale-0)"
          backgroundcolorhover="var(--color-greyScale-0)"
          title="Fazer Login"
        />
        <Button
          margin="16px 0"
          backgroundcolor="var(--color-whiteFixed)"
          bordercolor="var(--color-greyScale-4)"
          textcolor="var(--color-greyScale-0)"
          backgroundcolorhover="var(--color-greyScale-0)"
          title="Cadastrar"
        />
      </div>
    )}
  </StyledHeader>
  );
};
