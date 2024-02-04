import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getCategoriesService} from '../services/categoryService'
import { handleFetchCompanyError } from '../constants/errorConstant.tsx/errorCategory';
import { IApiResponse, ICategories } from '../types/types';
import { AxiosError } from 'axios';

interface CategoryState {
    data: ICategories[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string;
}

export const getCategories = createAsyncThunk('getCategories', async (token: string) => {
    try {
        const response = await getCategoriesService(token);
        return response.data;
    }  catch (error) {
        const axiosError = error as AxiosError<IApiResponse>;
        handleFetchCompanyError(axiosError);
    }
});

const initialState: CategoryState = {
    data: [],
    status: 'idle',
};

const categorySlice = createSlice({
    name: 'category',
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(getCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })

            .addCase(getCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default categorySlice.reducer;