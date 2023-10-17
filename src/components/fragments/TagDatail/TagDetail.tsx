import { TextBody2 } from "../../../styles/Text/text.styled";
import { StyledTagUser } from "./tagDetail.styled";

interface TagUserProps {
  children: React.ReactNode;
}

const TagDetail = ({ children }: TagUserProps) => {
  return (
    <StyledTagUser>
      <TextBody2 color="var(--color-brand-1)">{children}</TextBody2>
    </StyledTagUser>
  );
};

export default TagDetail;
