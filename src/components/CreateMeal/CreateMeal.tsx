import React, {useState} from 'react';
import Form from "../Form/Form.tsx";
import {ApiMeals} from "../../type.ts";
import axiosApi from "../../axiosApi.ts";
import { useNavigate} from "react-router-dom";
const CreateMeal = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const saveNewMeal = async (meal:ApiMeals) => {
        setLoading(true)
        await axiosApi.post(`/meals.json` ,meal);
        navigate("/");
    }

    return (
        <div>
            <Form saveNewMeal={saveNewMeal} loading={loading}/>
        </div>
    );
};

export default CreateMeal;