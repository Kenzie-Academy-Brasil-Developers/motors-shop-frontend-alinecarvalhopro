import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { IUser } from "./UserContext";

interface IAnnouncementsProviderProps {
  children: ReactNode;
}

interface IAnnouncementsContext {
  getAnnouncements: () => Promise<void>;
  announcements: IAnnoucement[] | [];
}

interface IAnnoucement {
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
  comments: object[];
  user: IUser
}

export const AnnouncementsContext = createContext<IAnnouncementsContext>(
  {} as IAnnouncementsContext
);

export const AnnouncementsProvider = ({ children }: IAnnouncementsProviderProps) => {
  const [announcements, setAnnouncements] = useState<IAnnoucement[] | [] >([]);

  const getAnnouncements = async () => {
    try {
      const { data } = await api.get(`/announcements`);
      setAnnouncements(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnnouncementsContext.Provider value={{ getAnnouncements, announcements }}>
      {children}
    </AnnouncementsContext.Provider>
  );
};

export const useAnnouncementsContext = () => useContext(AnnouncementsContext);
