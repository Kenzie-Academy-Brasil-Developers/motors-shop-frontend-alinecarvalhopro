import { TextBody2 } from "../../../styles/Text/text.styled";
import { StyledTagDetail } from "./tagDetail.styled";

interface TagDetailProps {
  children: React.ReactNode;
  margin?: string;
}

const TagDetail = ({ children, margin }: TagDetailProps) => {
  return (
    <StyledTagDetail margin={margin}>
      <TextBody2  color="var(--color-brand-1)">{children}</TextBody2>
    </StyledTagDetail>
  );
};

export default TagDetail;
