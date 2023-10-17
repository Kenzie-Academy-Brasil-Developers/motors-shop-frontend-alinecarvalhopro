import { StyledCardProduct } from "./productCard.styled";
import NoImage from "../../assets/noImage.png";
import { HeadingH3, TextBody2 } from "../../styles/Text/text.styled";
import TagUser from "../fragments/TagUser/TagUser";
import TagDetail from "../fragments/TagDatail/TagDetail";

const ProductCard = () => {
  return (
    <StyledCardProduct>
      <div className="imageBoxProductCard">
        <img src={NoImage} alt="Product Image" />
      </div>
      <div className="productInfosBoxProductCard">
        <HeadingH3 fontSize="16px" fontWeight="600" margin="20px 0 0 0">
          Product title stays here - max 1 line
        </HeadingH3>
        <TextBody2 margin="25px 0 0 0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </TextBody2>
        <TagUser
          margin="16px 0 0 0"
          char={"Seller Name".charAt(0).toLowerCase()}
        >
          {"Seller Name Name".split(" ")[0] || ""}{" "}
          {"Seller Name".split(" ")[1] || ""}
        </TagUser>

        <div className="tagsPriceBoxProductCard">
          <div className="tagsBox">
            <TagDetail>0 KM</TagDetail>
            <TagDetail>2019</TagDetail>
          </div>
          <HeadingH3 fontSize="16px" fontWeight="600">
            R$ 00.000,00
          </HeadingH3>
        </div>
      </div>
    </StyledCardProduct>
  );
};

export default ProductCard;
