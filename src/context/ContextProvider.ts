import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

type StoreType = {
    userStore: {
        allUsers: IUserModel[]
    },
    postStore: {
        allPosts: IPostModel[]
    }
}

export const defaultValue = {
    userStore: {
        allUsers: []
    },
    postStore: {
        allPosts: []
    }
};
export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = () => {
    return useContext(Context);
}