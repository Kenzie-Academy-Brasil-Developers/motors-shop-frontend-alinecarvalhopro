import { useEffect, useState } from "react";
import Header, { HeaderMenu } from "../../components/Header/Header";
import TagUser from "../../components/fragments/TagUser/TagUser";
import { useUserContext } from "../../providers/UserContext";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { IAnnoucement } from "../../providers/AnnouncementsContext";
import Footer from "../../components/Footer/Footer";
import { StyledPageContainer } from "../../styles/ProductPage/pageContainer";
import NoImage from "../../assets/noImage.png";
import { HeadingH2, HeadingH3, TextBody2 } from "../../styles/Text/text.styled";
import TagDetail from "../../components/fragments/TagDatail/TagDetail";
import Button from "../../components/Button/Button";
import CommentCard from "../../components/CommentCard/CommentCard";

const ProductPage = () => {
  const { user, getLoggedInUser, navigate } = useUserContext();

  const [announcement, setAnnouncement] = useState({} as IAnnoucement);
  const [firstImage, setFirstImage] = useState();

  const { id } = useParams();

  useEffect(() => {
    getLoggedInUser();
    const getAnnouncement = async () => {
      const { data } = await api.get(`/announcements/${id}`);
      setAnnouncement(data.message);
      if (data.message.images && data.message.images.length > 0) {
        setFirstImage(data.message.images[0].url);
      }
    };
    getAnnouncement();
  }, []);

  return (
    <StyledPageContainer>
      <Header>
        {user ? (
          <TagUser
            char={user.name.charAt(0).toUpperCase()}
            children={`${user.name.split(" ")[0] || ""} ${
              user.name.split(" ")[1] || ""
            }`}
          />
        ) : (
          <HeaderMenu />
        )}
      </Header>
      <div className="containerProductInfos">
        <div className="positioningBackground">
          <div className="imageBox">
            <img
              src={firstImage ? firstImage : NoImage}
              alt={announcement.model}
            />
          </div>
        </div>
        <section className="productDetails">
          <HeadingH2 margin="20px 0 0 0" fontSize="16px" fontWeight="600">
            {`${announcement.brand} - ${announcement.model}`}
          </HeadingH2>
          <div className="tagsBox">
            <TagDetail margin="0 10px 0 0">{`${announcement.mileage} KM`}</TagDetail>
            <TagDetail>{announcement.year}</TagDetail>
          </div>
          <HeadingH3
            margin="16px 0 0 0"
            className="price"
            fontSize="16px"
            fontWeight="600"
          >
            {`R$ ${announcement.price}`}
          </HeadingH3>
          <Button
            onClickHandler={() =>
              navigate(`https://wa.me/55${announcement.user.phone_number}`)
            }
            title="Comprar"
            width="100px"
            margin="16px 0 0 0"
          />
        </section>
        <section className="productDescription">
          <HeadingH2 margin="20px 0 0 0" fontSize="16px" fontWeight="600">
            Descrição
          </HeadingH2>
          <TextBody2 margin="16px 0">{announcement.description}</TextBody2>
        </section>
        <section className="sellerInfos">
          <div className="userCharacters">
            <TextBody2 fontSize="40px" color="var(--color-whiteFixed)">
              {announcement.user?.name.charAt(0).toUpperCase()}
            </TextBody2>
          </div>
          <HeadingH2 margin="16px 0">{announcement.user?.name}</HeadingH2>
          <TextBody2 margin="16px 0">
            {announcement.user?.description}
          </TextBody2>
          <Button
            title="Ver todos os anúncios"
            width="206px"
            bordercolor="transparent"
            backgroundcolor="var(--color-greyScale-0)"
            backgroundcolorhover="var(--color-greyScale-1)"
            onClickHandler={() => navigate(`/seller/${announcement.user?.id}`)}
          />
        </section>
        <section className="boxComments">
        <HeadingH2  fontSize="16px" fontWeight="600">
            Comentários
          </HeadingH2>
        </section>
      </div>
      <Footer />
    </StyledPageContainer>
  );
};

export default ProductPage;
