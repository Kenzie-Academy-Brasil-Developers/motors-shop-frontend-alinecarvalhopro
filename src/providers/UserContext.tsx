import { ReactNode, createContext, useContext, useState } from "react";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  user: IUser | null;
}

interface IUser {
  id: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({children}: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext);



