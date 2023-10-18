import { StyledCardProduct } from "./productCard.styled";
import NoImage from "../../assets/noImage.png";
import { HeadingH3, TextBody2 } from "../../styles/Text/text.styled";
import TagUser from "../fragments/TagUser/TagUser";
import TagDetail from "../fragments/TagDatail/TagDetail";
import { useAnnouncementsContext } from "../../providers/AnnouncementsContext";

const ProductCard = () => {
  const { announcements } = useAnnouncementsContext();

  return (
    <>
      {announcements.map((announcement) => (
        <StyledCardProduct key={announcement.id}>
          <div className="imageBoxProductCard">
            <img
              src={
                announcement.images.length > 0
                  ? announcement.images[0].url
                  : NoImage
              }
              alt={announcement.model}
            />
          </div>
          <div className="productInfosBoxProductCard">
            <HeadingH3
              margin="16px 0 0 0"
              fontSize="16px"
              fontWeight="600"
              className="model"
            >
              {`${announcement.brand} - ${announcement.model}`}
            </HeadingH3>
            <TextBody2 className="description">
              {announcement.description}
            </TextBody2>
            <TagUser
              margin="16px 0 0 0"
              char={announcement.user.name.charAt(0).toLowerCase()}
            >
              {announcement.user.name.split(" ")[0] || ""}{" "}
              {announcement.user.name.split(" ")[1] || ""}
            </TagUser>
            <div className="tagsPriceBoxProductCard">
              <div className="tagsBox">
                <TagDetail>{`${announcement.mileage} KM`}</TagDetail>
                <TagDetail>{announcement.year}</TagDetail>
              </div>
              <HeadingH3 className="price" fontSize="16px" fontWeight="600">
                {`R$ ${announcement.price}`}
              </HeadingH3>
            </div>
          </div>
        </StyledCardProduct>
      ))}
    </>
  );
};

export default ProductCard;
