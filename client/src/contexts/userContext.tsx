import React, { createContext, useEffect, useState } from 'react';
import { userInfoService } from '../services/userService';
import { IApiResponse, IUser, IUserContext, IUserProviderProps } from '../types/types';
import { AxiosError } from 'axios';
import { handleInvalidLoginError } from '../constants/errorConstant.tsx/errorUser';

import useCategorySlice from '../hooks/useCategorySlice';

const UserContext = createContext<IUserContext>({
    user: null,
    loading: false,
    setLoading: () => { },
    getUser: async () => { },
});

const UserProvider: React.FC<IUserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const { fetchCategories } = useCategorySlice();

    const fetchUserData = async (token: string) => {
        try {
            const res = await userInfoService(token);
            //console.log("userInfo res:", res)
            const userToken = res.data.token;
            setUser(res.data);

            if (localStorage.getItem('token')) {
                localStorage.setItem('token', userToken);
            }

            if (sessionStorage.getItem('token')) {
                sessionStorage.setItem('token', userToken);
            }

            fetchCategories(userToken);

            setLoading(false);
        } catch (error) {
            const axiosError = error as AxiosError<IApiResponse>;
            return handleInvalidLoginError(axiosError);
        }
    };

    const rememberMe = () => {
        const rememberMeToken = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (rememberMeToken) {
            fetchUserData(rememberMeToken);
        }
    };

    useEffect(() => {
        rememberMe();
    }, []);

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