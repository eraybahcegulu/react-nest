import { ReactNode } from "react";

export interface ILogin{
    email: string,
    password: string
}

export interface IUser{
    email: string,
}

export interface ICategories{
    id: number,
    title: string
}

export interface IApiResponse{
    message: string;
}

export interface IUserContext {
    user: IUser | null;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    getUser: (token: string) => Promise<void> ;
}

export interface IUserProviderProps {
    children: ReactNode;
}