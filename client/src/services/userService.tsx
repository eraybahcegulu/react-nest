import axios from "axios";
import { GET_USER_INFO_API_URL, LOGIN_API_URL } from "../constants/apiConstant.tsx/apiUser";
import { ILogin } from "../types/types";

const loginService = async (data: ILogin) => {
    return await axios.post(

        LOGIN_API_URL,

        data

    );
}

const userInfoService = async (token: string) => {
    return await axios.get(

        GET_USER_INFO_API_URL,

        {
            headers: {
                authorization: `Bearer ${token}`,
                api_source: `${GET_USER_INFO_API_URL}`
            }
        }

    )
}

export { loginService, userInfoService };