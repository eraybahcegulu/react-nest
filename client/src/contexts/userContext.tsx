import React, { createContext, useState } from 'react';
import { userInfoService } from '../services/userService';
import { IApiResponse, IUser, IUserContext, IUserProviderProps } from '../types/types';
import { AxiosError } from 'axios';
import { handleInvalidLoginError } from '../constants/errorConstant.tsx/errorUser';

const UserContext = createContext<IUserContext | null>(null);

const UserProvider: React.FC<IUserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUserData = async (token: string) => {
        try {
            const res = await userInfoService(token);
            console.log("userInfo res:", res)
            token = res.data.token;
            setUser(res.data);

            setLoading(false);
        } catch (error) {
            const axiosError = error as AxiosError<IApiResponse>;
            return handleInvalidLoginError(axiosError);
        }
    };

    return (
        <UserContext.Provider
            value={{
                user,
                loading,
                setLoading,
                getUser: (token: string) => fetchUserData(token),
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export {
    UserProvider
}

export default UserContext;