import axios from "axios";
import { GET_CATEGORIES_API_URL } from "../constants/apiConstant.tsx/apiCategory";

const getCategoriesService = async (token: string) => {
    return await axios.get(
            GET_CATEGORIES_API_URL,

            {
                headers: {
                    authorization: `Bearer ${token}`,
                    api_source: `${GET_CATEGORIES_API_URL}`
                }
            }

        );
};

export {
    getCategoriesService,
};