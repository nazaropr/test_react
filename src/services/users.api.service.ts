import {IUsersResponseModel} from "../models/response-models/IUsersResponseModel";


const getAllUsers = ():Promise<IUsersResponseModel> => {
    return fetch('https://dummyjson.com/users')
        .then((res) => res.json())
}



export{
    getAllUsers,
}
