import { useUserContext } from "../../../providers/UserContext";
import { TextBody2 } from "../../../styles/Text/text.styled";
import Button from "../../Button/Button";
import { StyledTagUser } from "./tagUser.styled";

interface TagUserProps {
  children: React.ReactNode;
  char: string;
  margin?: string;
  onClick?: () => void;
}

const TagUser = ({ children, char, margin, onClick }: TagUserProps) => {
  return (
    <StyledTagUser onClick={onClick} margin={margin}>
      <div className="char">
        <TextBody2 color="var(--color-whiteFixed)">{char}</TextBody2>
      </div>
      <TextBody2>{children}</TextBody2>
    </StyledTagUser>
  );
};

export default TagUser;

export const UserOption = () => {
  const { user } = useUserContext();
  return (
    <div className="userOptions">
      <Button
        bordercolor="transparent"
        backgroundcolor="var(--color-whiteFixed)"
        backgroundcolorhover="var(--color-blackFixed)"
        textcolor="var(--color-greyScale-2)"
        title="Editar perfil"
      />
      <Button
        bordercolor="transparent"
        backgroundcolor="var(--color-whiteFixed)"
        backgroundcolorhover="var(--color-blackFixed)"
        textcolor="var(--color-greyScale-2)"
        title="Editar endereço"
      />
      {user?.seller ? (
        <Button
          bordercolor="transparent"
          backgroundcolor="var(--color-whiteFixed)"
          backgroundcolorhover="var(--color-blackFixed)"
          textcolor="var(--color-greyScale-2)"
          title="Cadastrar um veículo"
        />
      ) : null}
      <Button
        bordercolor="transparent"
        backgroundcolor="var(--color-whiteFixed)"
        backgroundcolorhover="var(--color-blackFixed)"
        textcolor="var(--color-greyScale-2)"
        title="Sair"
      />
    </div>
  );
};
