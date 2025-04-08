import React, {FC} from 'react';
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";

interface IProps {
    car: ICarWithAuthModel;
}

const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
            {car.id} {car.brand}
        </div>
    );
};

export default CarComponent;