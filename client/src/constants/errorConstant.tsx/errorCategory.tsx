import { AxiosError } from "axios";
import { IApiResponse } from "../../types/types";
import { failedServer } from "../notifyConstant.tsx/notifyUser";

const handleFetchCompanyError = (error: AxiosError<IApiResponse>) => {
    if (error.response) {
        failedServer(error.response.data.message);
    } else {
        failedServer(error.message);
    }
};

export {
    handleFetchCompanyError,
};