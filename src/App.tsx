import React, {useReducer} from 'react';

interface counterState {
    count: number;
}

interface counterAction {
    type: string;
    payload: number;
}

const callbackReducer = (state: counterState, action: counterAction): counterState => {
    switch (action.type) {
        case 'inc':
            state.count += 1;
            return {...state}
        case 'dec':
            state.count -= 1;
            return {...state}
        case 'res':
            state.count = 0
            return {...state}
    }
    return {count: -1501500};
}


const App = () => {

    const [state, dispatch] = useReducer(callbackReducer, {count: 0})

    return (
        <div>


            <h2>{state.count}</h2>
            <button onClick={() => {
                dispatch({type: 'inc', payload: 0});
            }}>inc</button>
            <button onClick={() => {
                dispatch({type: 'dec', payload: 0});
            }}>dec</button>
            <button onClick={() => {
                dispatch({type: 'res', payload: 0});
            }}>res</button>
        </div>
    );
};

export default App;