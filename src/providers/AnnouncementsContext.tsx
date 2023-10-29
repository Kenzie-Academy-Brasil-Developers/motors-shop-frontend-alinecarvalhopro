import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { IUser } from "./UserContext";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  TCreateAnnouncemet,
  TUpdateAnnouncementPartial,
} from "../schemas/announcement/announcement.create.schema";
import toast from "react-hot-toast";

interface IAnnouncementsProviderProps {
  children: ReactNode;
}

interface IAnnouncementsContext {
  getAnnouncements: () => Promise<void>;
  announcements: IAnnoucement[] | [];
  setAnnouncements: React.Dispatch<React.SetStateAction<[] | IAnnoucement[]>>;
  navigate: NavigateFunction;
  createAnnouncement: (formData: TCreateAnnouncemet) => Promise<void>;
  modalCreateAnnouncementIsOpen: boolean;
  setModalCreateAnnouncementIsOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  updateAnnouncement: (
    id: string,
    formData: TUpdateAnnouncementPartial
  ) => Promise<void>;
  modalUpdateAnnouncementIsOpen: boolean;
  setModalUpdateAnnouncementIsOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  loadingDeleteAnnouncement: boolean;
  setLoadingDeleteAnnouncement: React.Dispatch<React.SetStateAction<boolean>>;
  deleteAnnouncement: (id: string) => Promise<void>;
  getAnnouncementById: (id: string) => Promise<void>;
  announcement: IAnnoucement | null;
  removeAnnouncementIdLocalStorage: () => void;
  setAnnouncement: React.Dispatch<React.SetStateAction<null>>;
}

export interface IAnnoucement {
  id: string;
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
  comments: IComment[] | [];
  user: IUser;
}

export interface IComment {
  id: string;
  comment: string;
  date: string;
  announcement: IAnnoucement;
  user: IUser;
}

export const AnnouncementsContext = createContext<IAnnouncementsContext>(
  {} as IAnnouncementsContext
);

export const AnnouncementsProvider = ({
  children,
}: IAnnouncementsProviderProps) => {
  const [announcements, setAnnouncements] = useState<IAnnoucement[] | []>([]);
  const [modalCreateAnnouncementIsOpen, setModalCreateAnnouncementIsOpen] =
    useState(false);
  const [modalUpdateAnnouncementIsOpen, setModalUpdateAnnouncementIsOpen] =
    useState(false);
  const [loadingDeleteAnnouncement, setLoadingDeleteAnnouncement] =
    useState(false);
  const [announcement, setAnnouncement] = useState(null);

  const navigate = useNavigate();

  const getAnnouncements = async () => {
    try {
      const { data } = await api.get(`/announcements`);
      setAnnouncements(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnnouncementById = async (id: string) => {
    try {
      const { data } = await api.get(`/announcements/${id}`);
      setAnnouncement(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const createAnnouncement = async (formData: TCreateAnnouncemet) => {
    const token = localStorage.getItem("@MOTORSSHOP:TOKEN");
    try {
      const { data } = await api.post("/announcements", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModalCreateAnnouncementIsOpen(false);
      setAnnouncements([...announcements, data]);
      toast(`🚗 Anúncio criado com sucesso!`, {
        style: {
          border: '2px solid var(--color-feedback-success-1)',
          padding: '16px',
          color: 'var(--color-feedback-success-1)',
          backgroundColor: 'var(--color-feedback-success-3)'
        },
      });
    } catch (error) {
      console.log(error);
      toast(`🚫 Ops, algo deu errado`, {
        style: {
          border: '2px solid var(--color-feedback-alert-1)',
          padding: '16px',
          color: 'var(--color-feedback-alert-1)',
          backgroundColor: 'var(--color-feedback-alert-3)'
        },
      });
    }
  };

  const updateAnnouncement = async (
    id: string,
    formData: TUpdateAnnouncementPartial
  ) => {
    const token = localStorage.getItem("@MOTORSSHOP:TOKEN");
    try {
      const { data } = await api.patch(`/announcements/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModalUpdateAnnouncementIsOpen(false);
      setAnnouncements([...announcements, data]);
      removeAnnouncementIdLocalStorage();
      setModalUpdateAnnouncementIsOpen(false);
      toast(`🚗 Anúncio atualizado com sucesso!`, {
        style: {
          border: '2px solid var(--color-feedback-success-1)',
          padding: '16px',
          color: 'var(--color-feedback-success-1)',
          backgroundColor: 'var(--color-feedback-success-3)'
        },
      });
    } catch (error) {
      console.log(error);
      toast(`🚫 Ops, algo deu errado`, {
        style: {
          border: '2px solid var(--color-feedback-alert-1)',
          padding: '16px',
          color: 'var(--color-feedback-alert-1)',
          backgroundColor: 'var(--color-feedback-alert-3)'
        },
      });
    }
  };

  const deleteAnnouncement = async (id: string) => {
    setLoadingDeleteAnnouncement(true);
    const token = localStorage.getItem("@MOTORSSHOP:TOKEN");
    try {
      await api.delete(`/announcements/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      removeAnnouncementIdLocalStorage();
      setModalUpdateAnnouncementIsOpen(false);
      toast(`🚗 Anúncio removido com sucesso!`, {
        style: {
          border: '2px solid var(--color-feedback-success-1)',
          padding: '16px',
          color: 'var(--color-feedback-success-1)',
          backgroundColor: 'var(--color-feedback-success-3)'
        },
      });
    } catch (error) {
      console.log(error);
      toast(`🚫 Ops, algo deu errado`, {
        style: {
          border: '2px solid var(--color-feedback-alert-1)',
          padding: '16px',
          color: 'var(--color-feedback-alert-1)',
          backgroundColor: 'var(--color-feedback-alert-3)'
        },
      });
    } finally {
      setLoadingDeleteAnnouncement(false);
    }
  };

  const removeAnnouncementIdLocalStorage = () => {
    localStorage.removeItem("@MOTORSSHOP:ANNOUNCEMENTID");
  };

  return (
    <AnnouncementsContext.Provider
      value={{
        getAnnouncements,
        announcements,
        setAnnouncements,
        navigate,
        createAnnouncement,
        modalCreateAnnouncementIsOpen,
        setModalCreateAnnouncementIsOpen,
        updateAnnouncement,
        modalUpdateAnnouncementIsOpen,
        setModalUpdateAnnouncementIsOpen,
        loadingDeleteAnnouncement,
        setLoadingDeleteAnnouncement,
        deleteAnnouncement,
        getAnnouncementById,
        announcement,
        removeAnnouncementIdLocalStorage,
        setAnnouncement,
      }}
    >
      {children}
    </AnnouncementsContext.Provider>
  );
};

export const useAnnouncementsContext = () => useContext(AnnouncementsContext);
