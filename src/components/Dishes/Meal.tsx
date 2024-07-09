import React from 'react';
import {Meals} from "../../type.ts";

interface Props {
    meal:Meals
}

const Meal:React.FC<Props> = ({meal}) => {
    return (

        <div className="card mb-4">
            <h5 className="card-header">{meal.timeMeal}</h5>
            <div className="card-body">
                <h5 className="card-title">{meal.description}</h5>
                <p className="card-title">{meal.calories} Calories</p>
                <button type="button" className="btn btn-primary me-3">Edit</button>
                <button type="button" className="btn  btn-danger">Delete</button>
            </div>
        </div>


    );
};

export default Meal;