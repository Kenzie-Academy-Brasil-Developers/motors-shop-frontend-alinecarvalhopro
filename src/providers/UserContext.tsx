import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { IRegisterFormData } from "../components/Forms/RegisterForm/RegisterForm";
import { ILoginFormData } from "../components/Forms/LoginForm/LoginForm";
import jwt_decode from "jwt-decode";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  submitRegister: (formData: IRegisterFormData) => Promise<void>;
  submitLogin: (formData: ILoginFormData) => Promise<void>;
  logout: () => void;
  autoLogin: () => Promise<void>;
  user: IUser | null;
  navigate: NavigateFunction;
  getUserById: (userId: string) => Promise<IUser | undefined>;
  getLoggedInUser: () => Promise<void>;
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

interface IAddress {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

// interface IAnnoucement {
//   brand: string;
//   model: string;
//   list_price: number;
//   price: number;
//   year: string;
//   mileage: number;
//   description: string;
//   color: string;
//   fuel: string;
//   images: object[];
// }

interface IUserLoginResponse {
  token: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

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

  const autoLogin = async () => {
    const token = localStorage.getItem("@MOTORSSHOP:TOKEN");
    const id = localStorage.getItem("@MOTORSSHOP:USERID");
    if (token) {
      if (token && id) {
        navigate("/home");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("@MOTORSSHOP:TOKEN");
    localStorage.removeItem("@MOTORSSHOP:USERID");
    setUser(null);
    navigate("/");
  };

  const getUserById = async (userId: string) => {
    try {
      const { data } = await api.get<IUser>(`/users/${userId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
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
        autoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
