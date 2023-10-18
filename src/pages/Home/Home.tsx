import Header, { HeaderMenu } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { HeadingH2 } from "../../styles/Text/text.styled";
import { useAnnouncementsContext } from "../../providers/AnnouncementsContext";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Banner from "../../components/Banner/Banner";
import { StyledPageContainer } from "../../styles/Home/pageConteiner";

const Home = () => {
  const { getAnnouncements, announcements } = useAnnouncementsContext();

  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <StyledPageContainer>
      <Header>
        <HeaderMenu />
      </Header>
      <Banner />
      <main>
        {announcements.length > 0 ? (
          <ul>
            <ProductCard />
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
