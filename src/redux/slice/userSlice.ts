import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../service/jph.api.service";
import axios, {AxiosError} from "axios";

type userSliceType = {
    users: IUser[];
    user: IUser | null;
    isLoaded: boolean;
}

const initialState:userSliceType = {
    users: [],
    user: null,
    isLoaded: false
}

const loadUsers =  createAsyncThunk(
    'userSlice/loadUsers',
    async (_ , thunkAPI) => {
        try {
            const users = await userService.getAll();
            thunkAPI.dispatch(userActions.changeLoadState(true))
            return thunkAPI.fulfillWithValue(users);
        }catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }

    }
);

const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id:string | undefined, thunkAPI) => {
        if (id){
            try {
                const user = await userService.getById(id);
                thunkAPI.dispatch(userActions.changeLoadState(true))
                return thunkAPI.fulfillWithValue(user);
            }catch (e){
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data);
            }
        }
        return null;
    }
)

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadUsers.fulfilled,
                (state, action) => {
                    state.users = action.payload;
                }
            )
            .addCase(
                loadUsers.rejected,
                (state, action) => {

                }
            )
            .addCase(
                loadUserById.fulfilled,
                (state, action) => {
                    state.user = action.payload
                }
            )
            .addMatcher(isFulfilled(loadUsers, loadUserById),(state, action)=>{

            })
})

export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
}