import { TextBody2 } from "../../styles/Text/text.styled";
import TagUser from "../fragments/TagUser/TagUser";
import { StyledCommentCard } from "./commentCard.styled";

const CommentCard = () => {
  return (
    <StyledCommentCard>
      <TagUser char={"Seller Name".charAt(0).toLowerCase()}>Username</TagUser>
      <TextBody2 margin="12px 0 0 0">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </TextBody2>
    </StyledCommentCard>
  );
};

export default CommentCard;
