import {
  StyledCardProduct,
  StyledSellerButtonsBoxOnCardProduct,
} from "./productCard.styled";
import NoImage from "../../assets/noImage.png";
import Details from "../../assets/open.svg";
import { HeadingH3, TextBody2 } from "../../styles/Text/text.styled";
import TagUser from "../fragments/TagUser/TagUser";
import TagDetail from "../fragments/TagDatail/TagDetail";
import {
  IAnnoucement,
  useAnnouncementsContext,
} from "../../providers/AnnouncementsContext";
import { useUserContext } from "../../providers/UserContext";
import Button from "../Button/Button";

interface IProductCardPropos {
  announcements: IAnnoucement[] | [];
  has?: boolean;
}

const ProductCard = ({ announcements, has }: IProductCardPropos) => {
  const { navigate } = useUserContext();

  return (
    <>
      {announcements.map((announcement) => (
        <StyledCardProduct key={announcement.id}>
          <div className="imageBoxProductCard">
            <img
              onClick={() => navigate(`/product/${announcement.id}`)}
              className="imageCardProduct"
              src={
                announcement.images.length > 0
                  ? announcement.images[0].url
                  : NoImage
              }
              alt={announcement.model}
            />
            <img
              className="open"
              src={Details}
              alt="Detalhes do anúncio"
              onClick={() => navigate(`/product/${announcement.id}`)}
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
              char={announcement.user.name.charAt(0).toUpperCase()}
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
          {has ? <SellerButtons announcementId={announcement.id} /> : null}
        </StyledCardProduct>
      ))}
    </>
  );
};

export default ProductCard;

interface ISellerButtonsProps {
  announcementId: string;
}

export const SellerButtons = ({ announcementId }: ISellerButtonsProps) => {
  const { navigate, scrollToTop } = useUserContext();
  const { setModalUpdateAnnouncementIsOpen } = useAnnouncementsContext();

  const setAnnouncementId = (announcementId: string) => {
    localStorage.setItem("@MOTORSSHOP:ANNOUNCEMENTID", announcementId);
    setModalUpdateAnnouncementIsOpen(true);
  };

  return (
    <StyledSellerButtonsBoxOnCardProduct>
      <Button
        title="Editar"
        onClickHandler={() => {
          setAnnouncementId(announcementId), scrollToTop();
        }}
        heigth="38px"
        margin="0 8px 0 0"
        backgroundcolor="var(--color-whiteFixed)"
        bordercolor="var(--color-greyScale-4)"
        textcolor="var(--color-greyScale-0)"
        backgroundcolorhover="var(--color-greyScale-0)"
      />
      <Button
        title="Ver detalhes"
        onClickHandler={() => {
          navigate(`/product/${announcementId}`);
        }}
        heigth="38px"
        margin="0 0 0 8px"
        backgroundcolor="var(--color-whiteFixed)"
        bordercolor="var(--color-greyScale-4)"
        textcolor="var(--color-greyScale-0)"
        backgroundcolorhover="var(--color-greyScale-0)"
      />
    </StyledSellerButtonsBoxOnCardProduct>
  );
};
