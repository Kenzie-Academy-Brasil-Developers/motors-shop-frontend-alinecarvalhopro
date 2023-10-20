import Header, { HeaderMenu } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { HeadingH2 } from "../../styles/Text/text.styled";
import { useAnnouncementsContext } from "../../providers/AnnouncementsContext";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Banner from "../../components/Banner/Banner";
import { StyledPageContainer } from "../../styles/Home/pageConteiner";
import { useUserContext } from "../../providers/UserContext";
import TagUser from "../../components/fragments/TagUser/TagUser";

const Home = () => {
  const { getAnnouncements, announcements } = useAnnouncementsContext();

  const { autoLogin, getLoggedInUser, user } = useUserContext();

  useEffect(() => {
    getAnnouncements();
    getLoggedInUser();
    // autoLogin();
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
      <Banner />
      <main>
        {announcements.length > 0 ? (
          <ul>
            <ProductCard announcements={announcements} />
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

export default Home;
