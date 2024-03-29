import { AxiosError } from "axios";
import { invalidLogin, failedServer } from "../notifyConstant.tsx/notifyUser";
import { IApiResponse } from "../../types/types";

const handleInvalidLoginError = (error: AxiosError<IApiResponse>) => {
    if (error.response) {
        invalidLogin(error.response.data.message);
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