import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { api } from "../services/api";
import { IUser } from "./UserContext";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { TCommentSchema } from "../schemas/comment/commet";
import {
  TCreateAnnouncemet,
  TUpdateAnnouncementPartial,
} from "../schemas/announcement/announcement.create.schema";

interface IAnnouncementsProviderProps {
  children: ReactNode;
}

interface IAnnouncementsContext {
  getAnnouncements: () => Promise<void>;
  announcements: IAnnoucement[] | [];
  setAnnouncements: React.Dispatch<React.SetStateAction<[] | IAnnoucement[]>>;
  navigate: NavigateFunction;
  createComment: (id: string, formData: TCommentSchema) => Promise<void>;
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

  const navigate = useNavigate();

  const getAnnouncements = async () => {
    try {
      const { data } = await api.get(`/announcements`);
      setAnnouncements(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [announcement, setAnnouncement] = useState(null);
  const getAnnouncementById = async (id: string) => {
    try {
      const { data } = await api.get(`/announcements/${id}`);
      setAnnouncement(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async (id: string, formData: TCommentSchema) => {
    const token = localStorage.getItem("@MOTORSSHOP:TOKEN");
    try {
      await api.post(`/comments/announcements/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [modalCreateAnnouncementIsOpen, announcements]);

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
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
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
        createComment,
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
      }}
    >
      {children}
    </AnnouncementsContext.Provider>
  );
};

export const useAnnouncementsContext = () => useContext(AnnouncementsContext);
