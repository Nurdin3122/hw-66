
import './App.css'
import {Route, Routes, useLocation,} from "react-router-dom";
import Home from "./container/Home/Home.tsx";
import {useCallback, useEffect, useState} from "react";
import axiosApi from "./axiosApi.ts";
import {ApiMealsObject, Meals} from "./type.ts";
import CreateMeal from "./components/CreateMeal/CreateMeal.tsx";
import EditMeal from "./components/CreateMeal/EditMeal.tsx";
import Layout from "./components/Layout/Layout.tsx";
const App = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState<Meals[]>([]);


    const fetchMeals = useCallback(async () => {
        try {
            setLoading(true);
            const {data:meals} = await axiosApi.get<ApiMealsObject | null>('/meals.json');
            if (!meals) {
                setMeals([]);
            } else {
                const newMeals = Object.keys(meals).map(id => ({
                ...meals[id],
                         id,
                }))
                setMeals(newMeals)
            }
        } finally {
            setLoading(false);
        }
    },[]);

    useEffect(() => {
        if(location.pathname === '/' ) {
            void fetchMeals();
        }
    },[fetchMeals,location])

    const deleteMeal = async (id:string) => {
       if(window.confirm('are you sure that you want to delete this cart ?')) {
           await axiosApi.delete(`/meals/${id}.json`);
           await fetchMeals();
       }
    }

  return (
      <>
          <Layout>
                  <Routes>
                      <Route path="/" element={<Home meals={meals} loading={loading} deleteMeal={deleteMeal}/>}/>
                      <Route path="/new-meal" element={<CreateMeal/>}/>
                      <Route path="edit-meal/:id" element={<EditMeal loading={loading}/>}/>
                      <Route path="*" element={<h1 className="text-center mt-5">Sorry, there is not such page</h1>}/>
                  </Routes>
          </Layout>
      </>
  )
};

export default App
