import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {create} from "zustand/react";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void,
        favoriteUser: IUserModel | null,
        setFavorite: (user: IUserModel) => void,
    },
    postStore: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void,
    }
}

export const useStore = create<StoreType>()((set)=>{
    return {
        userStore:{
            allUsers: [],
            loadUsers: (users:IUserModel[]) => {
                set((state)=>{
                    return {
                        ...state,
                        userStore:{
                            ...state.userStore,
                            allUsers: users
                        }
                    }
                })
            },
            favoriteUser: null,
            setFavorite: (user: IUserModel) => {
                set((state)=>{
                    return {
                        ...state,
                        userStore: {
                            ...state.userStore,
                            favoriteUser: user
                        }
                    }
                })
            },
        },
        postStore: {
            allPosts: [],
            loadPosts: (posts: IPostModel[]) => {
                set((state)=>{
                    return {
                        ...state,
                        postStore:{
                            ...state.postStore,
                            allPosts: posts
                        }
                    }
                })
            }
        }
    }
})