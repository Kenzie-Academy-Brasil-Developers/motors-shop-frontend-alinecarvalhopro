import { SubmitHandler, useForm } from "react-hook-form";
import InputContainer from "../../InputContainer/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../Button/Button";
import { TextBody2 } from "../../../styles/Text/text.styled";
import { useAnnouncementsContext } from "../../../providers/AnnouncementsContext";
import { createAnnouncemetSchema } from "../../../schemas/announcement/announcement.create.schema";
import { StyledECreateAnnouncementFormContainer } from "./createAnnouncementForm.style";

export interface ICreateAnnouncementFormData {
  brand: string;
  model: string;
  list_price: number;
  price: number;
  year: string;
  mileage: number;
  description: string;
  color: string;
  fuel: string;
  images: any;
}

const CreateAnnouncementForm = () => {
  const { createAnnouncement, setModalCreateAnnouncementIsOpen } =
    useAnnouncementsContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<ICreateAnnouncementFormData>({
    resolver: zodResolver(createAnnouncemetSchema),
  });

  const submit: SubmitHandler<ICreateAnnouncementFormData> = (formData) => {
    const images = formData.images[0].url === "" ? [] : formData.images;
    const newData = {
      ...formData,
      mileage: Number(formData.mileage),
      images: images,
    };
    createAnnouncement(newData);
  };

  return (
    <StyledECreateAnnouncementFormContainer>
      <TextBody2 margin="12px" fontWeight="500" color="var(--color-blackFixed)">
        Informações do veículo
      </TextBody2>
      <form style={{ margin: 12 }} onSubmit={handleSubmit(submit)}>
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.brand?.message}
          label="Marca"
          id="brand"
          type="text"
          placeholder="Digite a marca"
          {...register("brand")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.model?.message}
          label="Modelo"
          id="model"
          type="text"
          placeholder="Digite o modelo"
          {...register("model")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.price?.message}
          label="Preço"
          id="price"
          type="text"
          placeholder="Digite o preço"
          {...register("price")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.list_price?.message}
          label="Peço tabela FIPE"
          id="list_price"
          type="text"
          placeholder="Digite o preço na tabela FIPE"
          {...register("list_price")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.year?.message}
          label="Ano"
          id="year"
          type="text"
          placeholder="Digite o ano"
          {...register("year")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.color?.message}
          label="Cor"
          id="color"
          type="text"
          placeholder="Digite a cor"
          {...register("color")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.mileage?.message}
          label="Quilometragem"
          id="mileage"
          type="number"
          placeholder="Digite a quilometragem"
          {...register("mileage")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          errorMessage={errors.fuel?.message}
          label="Combustível"
          id="fuel"
          type="text"
          placeholder="Digite o tipo de combustível"
          {...register("fuel")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          height="80px"
          errorMessage={errors.description?.message}
          label="Descrição"
          id="description"
          type="text"
          placeholder="Digite descrição"
          {...register("description")}
        />
        <InputContainer
          marginfieldset="0 0 16px 0"
          label="Imagem"
          id="url"
          type="text"
          placeholder="Digite a url da imagem"
          {...register(`images.[0].url`)}
        />
        <div className="boxButtons">
          <Button
            margin="0 8px 0 0"
            backgroundcolor="var(--color-brand-3)"
            backgroundcolorhover="var(--color-brand-2)"
            bordercolor="transparent"
            type="submit"
            title={isSubmitted ? "Aguarde" : "Criar anúncio"}
          />
          <Button
            margin="0 0 0 8px"
            backgroundcolor="var(--color-greyScale-6)"
            backgroundcolorhover="var(--color-greyScale-1)"
            bordercolor="transparent"
            textcolor="var(--color-greyScale-2)"
            type="button"
            title="Cancelar"
            onClickHandler={() => setModalCreateAnnouncementIsOpen(false)}
          />
        </div>
      </form>
    </StyledECreateAnnouncementFormContainer>
  );
};

export default CreateAnnouncementForm;
