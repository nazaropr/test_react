import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        setFavorite: (user: IUserModel) => void,
    },
    postStore: {
        allPosts: IPostModel[]
    }
}

export const defaultValue = {
    userStore: {
        allUsers: [],
        setFavorite: (user: IUserModel) => {},
    },
    postStore: {
        allPosts: []
    }
};
export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = () => {
    return useContext(Context);
}