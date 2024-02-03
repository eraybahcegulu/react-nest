import { AxiosError } from 'axios';
import { handleInvalidLoginError } from '../constants/errorConstant.tsx/errorUser';
import { loginService } from '../services/userService';
import { IApiResponse, ILogin } from '../types/types';
import useUserContext from './useUserContext';
import { useNavigate } from 'react-router-dom';

const useUser = () => {
    const navigate = useNavigate();
    const { getUser = async () => {} } = useUserContext() || {};

    const login = async (values: ILogin) => {
        try {
            const res = await loginService(values);
            console.log("login res:", res)
            const token = res.data.token;

            await getUser(token);

            navigate(`/home`,)

        } catch (error) {
            const axiosError = error as AxiosError<IApiResponse>;
            handleInvalidLoginError(axiosError);
        }
    }

    return { login };
}

export default useUser