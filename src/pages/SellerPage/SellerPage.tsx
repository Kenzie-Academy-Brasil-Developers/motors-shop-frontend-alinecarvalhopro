import { useEffect, useState } from "react";
import { IUser, useUserContext } from "../../providers/UserContext";
import Header, { HeaderMenu } from "../../components/Header/Header";
import TagUser from "../../components/fragments/TagUser/TagUser";
import { HeadingH2, HeadingH3, TextBody2 } from "../../styles/Text/text.styled";
import TagDetail from "../../components/fragments/TagDatail/TagDetail";
import ProductCard from "../../components/ProductCard/ProductCard";
import { StyledPageContainer } from "../../styles/SellerPage/pageConteiner";
import Footer from "../../components/Footer/Footer";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { IAnnoucement } from "../../providers/AnnouncementsContext";

const SellerPage = () => {
  const { user, getLoggedInUser, getUserById } = useUserContext();
  const [annoucements, setAnnoucements] = useState<IAnnoucement[] | []>([]);
  const [seller, setSeller] = useState<IUser | undefined>();

  const { id } = useParams();

  const getSeller = async () => {
    if (id) {
      const sellerData = await getUserById(id);
      setSeller(sellerData);
    }
  };

  useEffect(() => {
    getLoggedInUser();
    const getAnnouncements = async () => {
      const { data } = await api.get(`/announcements/users/${id}`);
      setAnnoucements(data.message);
    };
    getAnnouncements();
    getSeller();
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
      <div className="sellerInformationContainer">
        <div className="sellerInformationBackground">
          <div className="boxSellerInformation">
            <div className="userCharacters">
              <TextBody2 fontSize="40px" color="var(--color-whiteFixed)">
                {seller?.name.charAt(0).toUpperCase()}
              </TextBody2>
            </div>
            <div className="boxSellerNameAndTag">
              <HeadingH3>{`${seller?.name.split(" ")[0] || ""} ${
                seller?.name.split(" ")[1] || ""
              }`}</HeadingH3>
              <TagDetail>Anunciante</TagDetail>
            </div>
            <TextBody2 margin="16px 0 0 0">{seller?.description}</TextBody2>
          </div>
        </div>
      </div>
      <main>
        <HeadingH2 className="announcementsTitle">Anúncios</HeadingH2>
        {annoucements.length > 0 ? (
          <ul>
            <ProductCard announcements={annoucements} />
          </ul>
        ) : (
          <HeadingH2 margin="16px">
            Sem anúncios cadastrados no momento.
          </HeadingH2>
        )}
      </main>
      <Footer />
    </StyledPageContainer>
  );
};

export default SellerPage;
