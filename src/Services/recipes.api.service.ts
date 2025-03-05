import axios, {AxiosResponse} from "axios";
import {IRecipeProps} from "../Models/Recipe";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

const getAllRecipes = ():Promise<AxiosResponse> => {
    return axiosInstance.get("/recipes");
}

export {
    getAllRecipes
}