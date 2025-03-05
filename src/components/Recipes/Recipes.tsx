import React, {FC, useEffect, useState} from 'react';

import {getAllRecipes} from "../../Services/recipes.api.service";
import {IRecipeProps} from "../../Models/Recipe";
import Recipe from "../Recipe/Recipe";


const Recipes:FC = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([]);

    useEffect(()=> {
        getAllRecipes().then(value =>{
            setRecipes(value.data.recipes);
        })
    },[])


    return (
        <div>
            {recipes.map(({id, name, mealType, cuisine, instructions, image}:IRecipeProps) => (
                <Recipe
                    key={id}
                    id={id}
                    name={name}
                    mealType={mealType}
                    cuisine={cuisine}
                    instructions={instructions}
                    image={image}/>
            ))}
        </div>
    );
};

export default Recipes;