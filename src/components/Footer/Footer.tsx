import { TextBody2 } from "../Text/text.styled";
import { StyledFooter } from "./footer.styled";
import Logo from "../../assets/imageFooter.png";
import ToTopButton from "./ToTopButton";

const Footer = () => {
  return (
    <StyledFooter>
      <img src={Logo} width={153.2} />
      <TextBody2 color="var(--color-whiteFixed)">
        © 2022 - Todos os direitos reservados.
      </TextBody2>
      <ToTopButton />
    </StyledFooter>
  );
};

export default Footer;
