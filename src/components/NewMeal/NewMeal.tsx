import React from 'react';
import Spinner from "../Spinner/Spinner.tsx";

interface Props {
    saveNewMeal:() => void;
    loading:boolean;
}

const NewMeal:React.FC<Props> = ({saveNewMeal,loading}) => {
    return (
        <div className="d-flex justify-content-center">
            <form>
                <select className="form-select mt-4" aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
                <div className="form-text mt-1">
                    You have to specify when did you eat
                </div>

                <input className="form-control mt-4"
                       type="text"
                       name="text"
                       placeholder="Describe your meal"
                       aria-label="default input example"
                />

                <label className="form-label mt-4">Calories</label>
                <input type="number"
                       name="number"
                       id="number"
                       className="form-control"
                       aria-describedby="passwordHelpBlock"
                />
                <div className="form-text">
                    You have to specify how many calories it could be
                </div>
                {loading ? <Spinner/> : (
                    <button type="submit" className="btn btn-success mt-3 d-flex ms-auto"
                    onClick={saveNewMeal}>Save
            </button>
            )

                }

            </form>
        </div>
    );
};

export default NewMeal;