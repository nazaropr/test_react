import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthModel} from "../../models/AuthModel";
import {authService} from "../../services/api.service";

const FormComponent = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthModel>({defaultValues:{username: 'userSZ1', password: 'P@$$word1'}})

    let [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData:AuthModel) => {
        let isAuth = await authService.authenticate(formData);
        setIsAuthState(isAuth);
    }


    return (
        <div>
            {
                isAuthState? <span>ok</span> : <span>not ok</span>
            }
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="password"{...register('password')}/>
                <button>submit</button>
            </form>
        </div>
    );
};

export default FormComponent;