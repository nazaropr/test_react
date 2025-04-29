import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type CounterStateType = {
    value: number;
}

const initialState:CounterStateType = {
    value: 0
}

export const counter1Slice = createSlice({
    name: 'counter1',
    initialState: initialState,
    reducers: {
        increment: (state,
                    action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        }
    }
});

export const {increment, decrement} = counter1Slice.actions


export const store = configureStore({
    reducer: {
        slice1: counter1Slice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector = useSelector.withTypes<RootState>()

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()