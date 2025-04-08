import React, {FC} from 'react';
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";
import {IPaginatedPageModel} from "../../models/IPaginatedPageModel";

interface IProps {
    next: IPaginatedPageModel | null,
    prev: IPaginatedPageModel | null,
    changePage: (page: string) => void
}

const PaginationComponent:FC<IProps> = ({changePage, prev, next}) => {

    return (
        <div>
            <button
                onClick={() => {
                    changePage('prev')
                }}
            disabled={!prev}
            >prev</button>
            <button
                onClick={() => {
                    changePage('next')
                }}
            disabled={!next}
            >next</button>
        </div>
    );
};

export default PaginationComponent;