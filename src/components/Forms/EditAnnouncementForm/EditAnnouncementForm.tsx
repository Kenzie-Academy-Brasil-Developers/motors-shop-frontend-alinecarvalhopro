import { SubmitHandler, useForm } from "react-hook-form";
import InputContainer from "../../InputContainer/InputContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../Button/Button";
import { TextBody2 } from "../../../styles/Text/text.styled";
import { useAnnouncementsContext } from "../../../providers/AnnouncementsContext";
import {
  TUpdateAnnouncementPartial,
  updateAnnouncementSchema,
} from "../../../schemas/announcement/announcement.create.schema";
import { useEffect, useState } from "react";
import { StyledEditAnnouncementFormContainer } from "./editAnnouncementForm.style";

const EditAnnouncementForm = () => {
  const {
    updateAnnouncement,
    setModalUpdateAnnouncementIsOpen,
    deleteAnnouncement,
    loadingDeleteAnnouncement,
    getAnnouncementById,
    announcement,
    removeAnnouncementIdLocalStorage,
  } = useAnnouncementsContext();

  const [loading, setLoading] = useState(true);

  const storedAnnouncementId = localStorage.getItem(
    "@MOTORSSHOP:ANNOUNCEMENTID"
  );

  useEffect(() => {
    if (storedAnnouncementId) {
      const get = async () => {
        await getAnnouncementById(storedAnnouncementId);
      };
      get();
      setLoading(false);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<TUpdateAnnouncementPartial>({
    resolver: zodResolver(updateAnnouncementSchema),
  });

  const submit: SubmitHandler<TUpdateAnnouncementPartial> = (formData) => {
    formData.year === "" ? (formData.year = announcement!.year) : null;
    formData.brand === "" ? (formData.brand = announcement!.brand) : null;
    formData.model === "" ? (formData.model = announcement!.model) : null;
    formData.color === "" ? (formData.color = announcement!.color) : null;
    formData.description === ""
      ? (formData.description = announcement!.description)
      : null;
    formData.fuel === "" ? (formData.fuel = announcement!.fuel) : null;
    formData.mileage == 0 || ""
      ? (formData.mileage = announcement!.mileage)
      : null;
    formData.list_price == 0 || ""
      ? (formData.list_price = announcement!.list_price)
      : null;
    formData.price == 0 || "" ? (formData.price = announcement!.price) : null;
    delete formData.images;

    const newData = {
      ...formData,
      mileage: Number(formData.mileage),
    };
    updateAnnouncement(storedAnnouncementId!, newData);
  };

  return (
    <>
      {loading ? (
        <TextBody2>Carregando...</TextBody2>
      ) : (
        <StyledEditAnnouncementFormContainer>
          <TextBody2
            margin="12px"
            fontWeight="500"
            color="var(--color-blackFixed)"
          >
            Informações do veículo
          </TextBody2>
          <form onSubmit={handleSubmit(submit)}>
            <InputContainer
              marginfieldset="0 0 16px 0"
              errorMessage={errors.brand?.message}
              label="Marca"
              id="brand"
              type="text"
              defaultValue={announcement?.brand}
              placeholder="Digite a marca"
              {...register("brand")}
            />
            <InputContainer
              marginfieldset="0 0 16px 0"
              errorMessage={errors.model?.message}
              label="Modelo"
              id="model"
              type="text"
              defaultValue={announcement?.model}
              {...register("model")}
            />
            <InputContainer
              marginfieldset="0 0 16px 0"
              errorMessage={errors.price?.message}
              label="Preço"
              id="price"
              type="text"
              defaultValue={announcement?.price}
              {...register("price")}
            />
            <InputContainer
              marginfieldset="0 0 16px 0"
              errorMessage={errors.list_price?.message}
              label="Peço tabela FIPE"
              id="list_price"
              type="text"
              defaultValue={announcement?.list_price}
              {...register("list_price")}
            />
            <InputContainer
              marginfieldset="0 0 16px 0"
              errorMessage={errors.year?.message}
              label="Ano"
              id="year"
              type="text"
              defaultValue={announcement?.year}
              {...register("year")}
            />
            <InputContainer
              marginfieldset="0 0 16px 0"
              errorMessage={errors.color?.message}
              label="Cor"
              id="color"
              type="text"
              defaultValue={announcement?.color}
              {...register("color")}
            />
            <InputContainer
              marginfieldset="0 0 16px 0"
              errorMessage={errors.mileage?.message}
              label="Quilometragem"
              id="mileage"
              type="number"
              defaultValue={announcement?.mileage}
              {...register("mileage")}
            />
            <InputContainer
              marginfieldset="0 0 16px 0"
              errorMessage={errors.fuel?.message}
              label="Combustível"
              id="fuel"
              type="text"
              defaultValue={announcement?.fuel}
              {...register("fuel")}
            />
            <InputContainer
              marginfieldset="0 0 16px 0"
              height="80px"
              errorMessage={errors.description?.message}
              label="Descrição"
              id="description"
              type="text"
              defaultValue={announcement?.description}
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
            <Button
              margin="0 0 16px 0"
              backgroundcolor="var(--color-brand-3)"
              backgroundcolorhover="var(--color-brand-2)"
              bordercolor="transparent"
              type="submit"
              title={isSubmitted ? "Aguarde" : "Criar anúncio"}
            />
            <div className="boxButtons">
              <Button
                margin="0 0 0 0"
                backgroundcolor="var(--color-greyScale-6)"
                backgroundcolorhover="var(--color-greyScale-1)"
                bordercolor="transparent"
                textcolor="var(--color-greyScale-2)"
                type="button"
                title="Cancelar"
                onClickHandler={() => {
                  setModalUpdateAnnouncementIsOpen(false),
                    removeAnnouncementIdLocalStorage();
                }}
              />
              <Button
                margin="0 0 0 8px"
                type="button"
                title={
                  loadingDeleteAnnouncement ? "Aguarde" : "Excluir anúncio"
                }
                backgroundcolor="var(--color-feedback-alert-3)"
                textcolor="var(--color-feedback-alert-1)"
                backgroundcolorhover="var(--color-feedback-alert-1)"
                bordercolor="transparent"
                onClickHandler={() => deleteAnnouncement(storedAnnouncementId!)}
              />
            </div>
          </form>
        </StyledEditAnnouncementFormContainer>
      )}
    </>
  );
};

export default EditAnnouncementForm;
