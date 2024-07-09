import React, {useState} from 'react';
import Dishes from "../../components/Dishes/Dishes.tsx";
import {Link} from "react-router-dom";
import {Meals} from "../../type.ts";
import Spinner from "../../components/Spinner/Spinner.tsx";

interface Props {
    meals:Meals[];
    loading:boolean;
}

const Home:React.FC<Props> = ({meals,loading}) => {
    const [totalCalories, setTotalCalories] = useState<string[]>([]);


    return (
        <div className="text-center  mt-3">
            <div className="d-flex">
                <div className="">
                    <p className="text-bg-danger p-2 rounded">Total Calories:{totalCalories}</p>
                </div>
                <div className="ms-auto">
                    <Link to={"/new-meal"}>
                        <button type="button" className="btn btn-danger">Add new meal</button>
                    </Link>
                </div>
            </div>
            <div className="mt-3">
                {loading ? <Spinner/> : (
                    <Dishes meals={meals}/>
                )}
            </div>
        </div>
    );
};

export default Home;