import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type counterStateType = {
    value: number
}

const initialState:counterStateType = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state, action:PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
