import { AxiosError } from "axios";
import { invalidLogin, failedServer } from "../notifyConstant.tsx/notifyUser";
import { IApiResponse } from "../../types/types";

const handleInvalidLoginError = (error: AxiosError<IApiResponse>) => {
    if (error.response) {
        const responseData: IApiResponse = error.response.data;
        invalidLogin(responseData.message);
    } else {
        failedServer(error.message);
    }
};

const handleFailedServerUserError = (error: AxiosError<IApiResponse>) => {
    if (error.response) {
        failedServer(error.response.data.message);
    } else {
        failedServer(error.message);
    }
};

export {
    handleInvalidLoginError,
    handleFailedServerUserError,
};