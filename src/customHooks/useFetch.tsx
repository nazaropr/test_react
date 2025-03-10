import {useEffect, useState} from 'react';

export const useFetch = <T,>(endpoint: string, initValue:T) => {
    const [array, setArray] = useState<any>([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com'+ endpoint)
            .then((res) => res.json())
            .then((data) => {
                setArray(data);
            });
    }, []);

    return array;
};

