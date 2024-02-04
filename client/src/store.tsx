import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./redux-toolkit/categorySlice";
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    categories: categorySlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;