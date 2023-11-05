import { useEffect, useState } from "react";
import { useUserContext } from "../../providers/UserContext";
import { useAnnouncementsContext } from "../../providers/AnnouncementsContext";
import { StyledPageContainer } from "./pageConteiner";
import Header, { HeaderMenu } from "../../components/Header/Header";
import { HeadingH2 } from "../../styles/Text/text.styled";
import ProductCard from "../../components/ProductCard/ProductCard";
import Banner from "../../components/Banner/Banner";
import TagUser, {
  UserOption,
} from "../../components/fragments/TagUser/TagUser";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const { getAnnouncements, announcements } = useAnnouncementsContext();
  const { getLoggedInUser, user } = useUserContext();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    getAnnouncements();
    getLoggedInUser();
  }, []);

  return (
    <StyledPageContainer>
      <Header>
        {user ? (
          <>
            <TagUser
              onClick={toggleMenu}
              char={user.name.charAt(0).toUpperCase()}
              children={`${user.name.split(" ")[0] || ""} ${
                user.name.split(" ")[1] || ""
              }`}
            />
            {menuOpen && <UserOption />}
          </>
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
