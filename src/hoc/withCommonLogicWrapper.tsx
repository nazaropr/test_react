import React, {FC} from 'react';

export const WithCommonLogicWrapper = (Component: FC) => {

    const wrapperComponent = (props:any) => {
       const x = 'block logic 1'
        return (
            <div>
                <h2>{x}</h2>
                <Component {...props} />
                <h3>block logic 3</h3>
            </div>
        )
    }

    return wrapperComponent
};

export default WithCommonLogicWrapper;