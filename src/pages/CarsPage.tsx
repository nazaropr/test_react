import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import CarsComponent from "../components/CarsComponent/CarsComponent";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {

    let [query, setQuery] = useSearchParams({page: '1'})

    let [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });

    useEffect(() => {
        carService.getAllCars(query.get('page') || '1').then(value => {
            if (value){
                setCarsPaginatedObject(value)
                console.log(value)
            }
        })
    },[query])

    const changePage = (page: string) => {
        switch (page) {
            case "prev":
                setQuery({...carsPaginatedObject.prev})
                break;
            case "next":
                setQuery({...carsPaginatedObject.next})
                break;

        }
    }

    return (
        <div>
            <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent next={carsPaginatedObject.next} prev={carsPaginatedObject.prev} changePage={changePage}/>
        </div>
    );
};
export default CarsPage;