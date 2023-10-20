import { HeadingH2, HeadingH3 } from "../../styles/Text/text.styled";
import { StyledImage } from "./banner.styled";

const Banner = () => {
  return (
    <StyledImage>
      <div>
        <HeadingH2 color="var(--color-whiteFixed)">Motors Shop</HeadingH2>
        <HeadingH3
          color="var(--color-whiteFixed)"
          margin="16px"
          fontSize="16px"
          style={{ textAlign: "center" }}
        >
          A melhor plataforma de anúncios de carros do país
        </HeadingH3>
      </div>
    </StyledImage>
  );
};

export default Banner;
