import React, {useEffect} from 'react';
import {carService} from "../services/api.service";

const CarsPage = () => {

    useEffect(()=>{
        carService.getAllCars().then(value=>{console.log(value)});
    }, [])

    return (
        <div>
            carsPage
        </div>
    );
};

export default CarsPage;