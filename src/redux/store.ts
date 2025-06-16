import {configureStore, createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {counterSlice} from "./slice/slice1";



export const store = configureStore({
    reducer: {
        slice1: counterSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
