
import './App.css'
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Header from "./container/Header/Header.tsx";
import Home from "./container/Home/Home.tsx";
import NewMeal from "./components/NewMeal/NewMeal.tsx";
import {useCallback, useEffect, useState} from "react";
import axiosApi from "./axiosApi.ts";
import {ApiMealsObject, Meals} from "./type.ts";
const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
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



    const saveNewMeal = () => {
        console.log("it is working")
        setLoading(true)
        navigate("/");
    }


  return (
      <>
          <header>
              <Header/>
          </header>
          <main className="container-fluid">
              <Routes>
                  <Route path="/" element={<Home meals={meals} loading={loading}/>}/>
                  <Route path="/new-meal" element={<NewMeal saveNewMeal={saveNewMeal} loading={loading}/>}/>
                  <Route path="*" element={<h1 className="text-center mt-5">Sorry, there is not such page</h1>}/>
              </Routes>
          </main>
      </>
  )
};

export default App
