import React, {FC} from 'react';
import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

const FormComponent:FC = () => {


    let {register, handleSubmit} = useForm<IFormProps>();

    const save = (formValues:IFormProps) => {
        console.log(formValues);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register('username')} />
                <input type="number" {...register('age')}/>
                <input type="text" {...register('password')}/>
                <button>click</button>
            </form>
        </div>
    );
};

export default FormComponent;