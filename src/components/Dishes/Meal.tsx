import React from 'react';
import {ApiMeals, Meals} from "../../type.ts";
import {Link} from "react-router-dom";

interface Props {
    meal:Meals
    deleteMeal:(id:string)=>void;
}

const Meal:React.FC<Props> = ({meal,deleteMeal}) => {
    return (
        <div className="card mb-4">
            <h5 className="card-header">{meal.timeMeal}</h5>
            <div className="card-body">
                <h5 className="card-title">{meal.description}</h5>
                <p className="card-title">{meal.calories} Calories</p>
                <Link to={`/edit-meal/${meal.id}`} className="btn btn-primary me-3">Edit</Link>
                <button type="button" className="btn  btn-danger" onClick={()=>deleteMeal(meal.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Meal;