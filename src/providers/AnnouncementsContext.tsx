import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { IUser } from "./UserContext";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { TCommentSchema } from "../schemas/comment/commet";

interface IAnnouncementsProviderProps {
  children: ReactNode;
}

interface IAnnouncementsContext {
  getAnnouncements: () => Promise<void>;
  announcements: IAnnoucement[] | [];
  navigate: NavigateFunction;
  createComment: (id: string, formData: TCommentSchema) => Promise<void>;
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
  // const [comments, setComments] = useState<IComment[] | []>([]);

  const navigate = useNavigate();

  const getAnnouncements = async () => {
    try {
      const { data } = await api.get(`/announcements`);
      setAnnouncements(data);
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

  return (
    <AnnouncementsContext.Provider
      value={{
        getAnnouncements,
        announcements,
        navigate,
        createComment,
      }}
    >
      {children}
    </AnnouncementsContext.Provider>
  );
};

export const useAnnouncementsContext = () => useContext(AnnouncementsContext);
