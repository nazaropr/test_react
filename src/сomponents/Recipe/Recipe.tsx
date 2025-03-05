import React, {FC} from 'react';
import styles from './recipe.module.css'
import {IRecipeProps} from "../../Models/Recipe";

type IRecipeTypeProps = IRecipeProps & {children?: React.ReactNode};

const Recipe:FC<IRecipeTypeProps> = ({id,
                                     name,
                                     mealType,
                                     cuisine,
                                     instructions,
                                     image
}) => {
    return (
        <div>
            <img src={image} alt={name} className={styles.recipeImg}/>
            <h2>{name}. {mealType}. {cuisine}</h2>
            <ul>
                {instructions?.map((instruction, index) => (<li key={index}>{instruction}</li>))}
            </ul>
        </div>
    );
};

export default Recipe;