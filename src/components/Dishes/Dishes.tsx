import React from 'react';
import {Meals} from "../../type.ts";
import Meal from "./Meal.tsx";

interface Props {
    meals:Meals[];
}

const Dishes:React.FC<Props> = ({meals}) => {
    return (
        <div>
            {meals.map(meal => (
                <Meal meal={meal} key={meal.id}/>
            ))}
        </div>
    );
};

export default Dishes;