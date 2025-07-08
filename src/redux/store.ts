import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slice/userSlice";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer
    }
})

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();