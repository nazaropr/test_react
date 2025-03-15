import {IToDoResponseModel} from "../models/response-models/IToDoResponseModel";

const getToDoById = (id:number):Promise<IToDoResponseModel> => {
    return fetch(`https://dummyjson.com/todos/user/${id}`)
        .then(res => res.json())
}

export {
    getToDoById
}