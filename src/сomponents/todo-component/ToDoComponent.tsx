import React, {FC} from 'react';
import {IToDoModel} from "../../models/basic-models/IToDoModel";

interface IProps {
    toDo: IToDoModel
}

const ToDoComponent:FC<IProps> = ({toDo}) => {
    return (
        <div>
            <div>id: {toDo.id} userId: {toDo.userId}</div>
            <div>{toDo.todo}</div>
            <div>{toDo.completed}</div>
            <hr/>
        </div>
    );
};

export default ToDoComponent;