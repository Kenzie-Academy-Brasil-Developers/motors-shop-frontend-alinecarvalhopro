import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { IRegisterFormData } from "../components/Forms/RegisterForm/RegisterForm";
import { ILoginFormData } from "../components/Forms/LoginForm/LoginForm";
import jwt_decode from "jwt-decode";
import { TUpdateUserPartial } from "../schemas/user/user.register";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  submitRegister: (formData: IRegisterFormData) => Promise<void>;
  submitLogin: (formData: ILoginFormData) => Promise<void>;
  logout: () => void;
  user: IUser | null;
  navigate: NavigateFunction;
  getUserById: (userId: string) => Promise<IUser | undefined>;
  getLoggedInUser: () => Promise<void>;
  updateUser: (id: string, data: TUpdateUserPartial) => Promise<void>;
  modalUpdateUserIsOpen: boolean;
  setModalUpdateUserIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: () => Promise<void>;
  loadingDeleteUser: boolean;
  modalUpdateAddressIsOpen: boolean;
  setModalUpdateAddressIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToTop: () => void;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birth: Date;
  description: string;
  address: IAddress;
  seller: boolean;
}

export interface IAddress {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

interface IUserLoginResponse {
  token: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [modalUpdateUserIsOpen, setModalUpdateUserIsOpen] = useState(false);
  const [loadingDeleteUser, setLoadingDeleteUser] = useState(false);
  const [modalUpdateAddressIsOpen, setModalUpdateAddressIsOpen] =
    useState(false);

  const navigate = useNavigate();

  const submitRegister = async (formData: IRegisterFormData) => {
    const formattedDate = format(
      new Date(formData.birth),
      "yyyy/MM/dd"
    ).toString();
    const newData = { ...formData, birth: formattedDate };
    try {
      await api.post("/users", newData);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const submitLogin = async (formData: ILoginFormData) => {
    try {
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      const decodedToken = jwt_decode(data.token) as {
        name: string;
        id: string;
        sub: string;
      };
      localStorage.setItem("@MOTORSSHOP:TOKEN", data.token);
      localStorage.setItem("@MOTORSSHOP:USERID", decodedToken.id);
      const userData = await getUserById(decodedToken.sub);
      if (userData) setUser(userData);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const getLoggedInUser = async () => {
    const token = localStorage.getItem("@MOTORSSHOP:TOKEN");
    const id = localStorage.getItem("@MOTORSSHOP:USERID");
    if (token) {
      if (token && id) {
        const response = await getUserById(id);
        if (response) setUser(response);
      }
    }
  };

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("@MOTORSSHOP:TOKEN");
      const id = localStorage.getItem("@MOTORSSHOP:USERID");
      if (!token && !id) {
        logout();
      }
    };
    autoLogin();
  }, []);

  const logout = () => {
    localStorage.removeItem("@MOTORSSHOP:TOKEN");
    localStorage.removeItem("@MOTORSSHOP:USERID");
    setUser(null);
  };

  const getUserById = async (userId: string) => {
    try {
      const { data } = await api.get<IUser>(`/users/${userId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (id: string, formData: TUpdateUserPartial) => {
    const token = localStorage.getItem("@MOTORSSHOP:TOKEN");
    try {
      await api.patch(`/users/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser({ ...user!, ...formData });
      setModalUpdateUserIsOpen(false);
      setModalUpdateAddressIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    setLoadingDeleteUser(true);
    const token = localStorage.getItem("@MOTORSSHOP:TOKEN");
    const id = localStorage.getItem("@MOTORSSHOP:USERID");
    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      logout();
      setModalUpdateUserIsOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingDeleteUser(false);
    }
  };

  useEffect(() => {}, [modalUpdateUserIsOpen, modalUpdateAddressIsOpen, user]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <UserContext.Provider
      value={{
        submitRegister,
        submitLogin,
        logout,
        user,
        navigate,
        getLoggedInUser,
        getUserById,
        updateUser,
        modalUpdateUserIsOpen,
        setModalUpdateUserIsOpen,
        deleteUser,
        loadingDeleteUser,
        modalUpdateAddressIsOpen,
        setModalUpdateAddressIsOpen,
        scrollToTop,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
