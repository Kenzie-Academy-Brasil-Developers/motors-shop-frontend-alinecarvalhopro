import { useEffect, useState } from "react";
import Header, { HeaderMenu } from "../../components/Header/Header";
import TagUser, {
  UserOption,
} from "../../components/fragments/TagUser/TagUser";
import { useUserContext } from "../../providers/UserContext";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { IAnnoucement, IComment } from "../../providers/AnnouncementsContext";
import Footer from "../../components/Footer/Footer";
import { StyledPageContainer } from "./pageContainer";
import NoImage from "../../assets/noImage.png";
import { HeadingH2, HeadingH3, TextBody2 } from "../../styles/Text/text.styled";
import TagDetail from "../../components/fragments/TagDatail/TagDetail";
import Button from "../../components/Button/Button";
import CommentCard from "../../components/CommentCard/CommentCard";
import { SubmitHandler, useForm } from "react-hook-form";
import InputContainer from "../../components/InputContainer/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCommentSchema, commentSchema } from "../../schemas/comment/commet";

interface ICommentRegister {
  comment: string;
}

const ProductPage = () => {
  const { id } = useParams();
  const { user, getLoggedInUser, navigate } = useUserContext();

  const [announcement, setAnnouncement] = useState({} as IAnnoucement);
  const [firstImage, setFirstImage] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [comments, setComments] = useState<IComment[] | []>([]);

  useEffect(() => {
    getLoggedInUser();
    getAnnouncement();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getAnnouncement = async () => {
    const { data } = await api.get(`/announcements/${id}`);
    setAnnouncement(data.message);
    if (data.message.images && data.message.images.length > 0) {
      setFirstImage(data.message.images[0].url);
    }
    if (data.message.comments && data.message.comments.length > 0) {
      setComments(data.message.comments);
    }
  };

  const createComment = async (id: string, formData: TCommentSchema) => {
    const token = localStorage.getItem("@MOTORSSHOP:TOKEN");
    try {
      const { data } = await api.post(
        `/comments/announcements/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments([...comments, data] as IComment[]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id: string) => {
    const token = localStorage.getItem("@MOTORSSHOP:TOKEN");

    try {
      await api.delete(`/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<ICommentRegister>({
    resolver: zodResolver(commentSchema),
  });

  const submit: SubmitHandler<ICommentRegister> = (formData) => {
    createComment(id!, formData);
    reset();
  };

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
          {comments.length > 0 ? (
            <>
              <HeadingH2 margin="0 0 16px 0" fontSize="16px" fontWeight="600">
                Comentários
              </HeadingH2>
              {!isLoading ? (
                <ul>
                  <CommentCard
                    comments={comments}
                    announcement={announcement}
                    deleteComment={deleteComment}
                  />
                </ul>
              ) : null}
            </>
          ) : (
            <HeadingH2 margin="0 0 16px 0" fontSize="16px" fontWeight="600">
              Ainda não há comentários nesse anúncio.
            </HeadingH2>
          )}
        </section>
        <section className="boxToComment">
          {user ? (
            <>
              <TagUser char={user.name.charAt(0).toUpperCase()}>
                {user.name}
              </TagUser>
              <form onSubmit={handleSubmit(submit)}>
                <InputContainer
                  height="128px"
                  label=""
                  placeholder="Deixe um comentário."
                  errorMessage={errors.comment?.message}
                  {...register("comment")}
                />
                <Button
                  type="submit"
                  margin="16px 0 0 0"
                  title={isLoading ? "Publicando" : "Comentar"}
                />
              </form>
            </>
          ) : (
            <>
              <HeadingH3 fontSize="20px" color="var(--color-greyScale-3)">
                Faça login para deixar um comentário
              </HeadingH3>
            </>
          )}
        </section>
      </div>
      <Footer />
    </StyledPageContainer>
  );
};

export default ProductPage;
