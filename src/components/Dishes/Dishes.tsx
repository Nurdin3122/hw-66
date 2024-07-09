import React from 'react';
import {ApiMeals, Meals} from "../../type.ts";
import Meal from "./Meal.tsx";

interface Props {
    meals:Meals[];
    deleteMeal:(id:string)=>void;
}

const Dishes:React.FC<Props> = ({meals,deleteMeal}) => {
    return (
        <div>
            {meals.map(meal => (
                <Meal  key={meal.id} meal={meal} deleteMeal={deleteMeal}/>
            ))}
        </div>
    );
};

export default Dishes;