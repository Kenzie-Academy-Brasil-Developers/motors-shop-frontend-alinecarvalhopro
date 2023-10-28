import { IAnnoucement, IComment } from "../../providers/AnnouncementsContext";
import { TextBody2 } from "../../styles/Text/text.styled";
import TagUser from "../fragments/TagUser/TagUser";
import { StyledCommentCard } from "./commentCard.styled";
import Remove from "../../assets/bin.svg";
import { useUserContext } from "../../providers/UserContext";

interface ICommentCardProps {
  comments: IComment[] | [];
  announcement: IAnnoucement;
  deleteComment: (id: string) => Promise<void>;
}

const CommentCard = ({
  comments,
  announcement,
  deleteComment,
}: ICommentCardProps) => {
  const { user } = useUserContext();
  const id = localStorage.getItem("@MOTORSSHOP:USERID");

  const calculateDaysPassed = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const oneDay = 1000 * 60 * 60 * 24;

    const timeDifference = Math.abs(today.getTime() - date.getTime());
    const daysPassed = Math.ceil(timeDifference / oneDay);

    if (daysPassed == 1) {
      return `• há ${daysPassed} dia`;
    }

    return `• há ${daysPassed} dias`;
  };

  return (
    <>
      {comments.map((comment) => (
        <StyledCommentCard key={comment.id}>
          <div className="boxUserDate">
            <TagUser char={comment.user.name.charAt(0).toUpperCase()}>
              {comment.user.name}
            </TagUser>
            <TextBody2
              margin="0 0 0 6px"
              fontSize="12px"
              color="var(--color-greyScale-3)"
              fontWeight="400"
            >
              {calculateDaysPassed(comment.date)}
            </TextBody2>
            {user ? (
              <>
                {comment.user.id === id || announcement.user.id === id ? (
                  <img
                    onClick={() => deleteComment(comment.id)}
                    className="binButton"
                    src={Remove}
                    alt="Remover anúncio"
                  />
                ) : null}
              </>
            ) : null}
          </div>
          <TextBody2 margin="16px 0 0 0">{comment.comment}</TextBody2>
        </StyledCommentCard>
      ))}
    </>
  );
};

export default CommentCard;
