import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi.ts";
import {ApiMeals} from "../../type.ts";
import Form from "../Form/Form.tsx";

interface Props {
    loading:boolean;
}

const EditMeal:React.FC<Props> = ({loading}) => {
    const [oneMeal, setOneMeal] = useState<ApiMeals | null>(null);
    const {id} = useParams();

    const fetchOneMeal = useCallback(async () => {
       const {data:meal} =  await axiosApi.get(`/meals/${id}.json`);
       setOneMeal(meal);
    },[id]);

    useEffect(() => {
        void fetchOneMeal();
    },[fetchOneMeal]);

    const getNewMeal = async (meal:ApiMeals) => {
        await axiosApi.put(`/meals/${id}.json`,meal);
    }

    return (
        <div>
            {oneMeal &&    <Form saveNewMeal={getNewMeal} loading={loading} existingDish={oneMeal}/>}
        </div>
    );
};

export default EditMeal;