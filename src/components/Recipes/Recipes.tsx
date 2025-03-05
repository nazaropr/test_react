import React, {FC, useEffect, useState} from 'react';
import Recipe, {IRecipeProps} from "../Recipe/Recipe";


const Recipes:FC = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([]);

    useEffect(()=> {
        fetch('https://dummyjson.com/recipes')
            .then(value => value.json())
            .then(({recipes}) => {
                console.log(recipes);
                setRecipes(recipes);
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