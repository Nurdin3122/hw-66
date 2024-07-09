import React, {useState} from 'react';
import Spinner from "../Spinner/Spinner.tsx";
import {ApiMeals, MealMutation, Meals} from "../../type.ts";

interface Props {
    saveNewMeal:(meal:ApiMeals) => void;
    loading:boolean;
    meals:Meals[];
    existingDish?:ApiMeals;

}

const emptyState: MealMutation = {
    timeMeal:"",
    description:"",
    calories:"",
};

const NewMeal:React.FC<Props> = ({saveNewMeal,loading,meals,existingDish}) => {
    const initialState: MealMutation = existingDish
        ? { ...existingDish, calories: existingDish.calories.toString() }
        : emptyState;

    const [mealMutation, setMealMutation] = useState<MealMutation>(initialState);

    const changeMeal = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setMealMutation((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };


    const onFormSubmit =(event: React.FormEvent) => {
        event.preventDefault();

        saveNewMeal({
            ...mealMutation,
            calories: parseFloat(mealMutation.calories),
        });
    }
    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={onFormSubmit}>
                <select className="form-select mt-4"
                        aria-label="Default select example"
                        name="timeMeal"
                        id="timeMeal"
                        value={mealMutation.timeMeal}
                        onChange={changeMeal}
                >
                    <option>Open this select menu</option>
                    <option>breakfast</option>
                    <option>snack</option>
                    <option>lunch</option>
                    <option>dinner</option>
                </select>
                <div className="form-text mt-1">
                    You have to specify when did you eat
                </div>

                <input className="form-control mt-4"
                       type="text"
                       name="description"
                       id="description"
                       placeholder="Describe your meal"
                       aria-label="default input example"
                       onChange={changeMeal}
                       value={mealMutation.description}
                       required

                />

                <label className="form-label mt-4">Calories</label>
                <input type="number"
                       name="calories"
                       id="calories"
                       className="form-control"
                       aria-describedby="passwordHelpBlock"
                       onChange={changeMeal}
                       required
                       value={mealMutation.calories}

                />
                <div className="form-text">
                    You have to specify how many calories it could be
                </div>
                {loading ? <Spinner/> : (
                    <button type="submit" className="btn btn-success mt-3 d-flex ms-auto">
                        Save
                    </button>
                )
                }
            </form>
        </div>
    );
};

export default NewMeal;