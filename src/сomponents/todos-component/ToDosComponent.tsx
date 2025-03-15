import React, {FC, useEffect, useState} from 'react';
import {IToDoModel} from "../../models/basic-models/IToDoModel";
import {IToDoResponseModel} from "../../models/response-models/IToDoResponseModel";
import {getToDoById} from "../../services/toDos.api.service";

interface IProps {
    userId: number
}

const ToDosComponent:FC<IProps> = ({userId}) => {
    console.log(userId)
    let [toDo, setToDo] = useState<IToDoModel[]>([]);

    useEffect(() => {
        getToDoById(userId).then((toDo:IToDoResponseModel)=> {
            // setToDo([...toDo.todos]);
            console.log(toDo.todos)
        })
    }, [userId]);

    return (
        <div>

        </div>
    );
};

export default ToDosComponent;