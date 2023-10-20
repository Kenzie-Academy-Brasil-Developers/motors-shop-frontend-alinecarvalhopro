import { TextBody2 } from "../../../styles/Text/text.styled";
import { StyledTagUser } from "./tagUser.styled";

interface TagUserProps {
  children: React.ReactNode;
  char: string;
  margin?: string;
}

const TagUser = ({ children, char, margin }: TagUserProps) => {
  return (
    <StyledTagUser margin={margin}>
      <div>
        <TextBody2 color="var(--color-whiteFixed)">{char}</TextBody2>
      </div>
      <TextBody2>{children}</TextBody2>
    </StyledTagUser>
  );
};

export default TagUser;
