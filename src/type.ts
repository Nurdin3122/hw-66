export interface Meals {
    timeMeal:string
    description:string;
    calories:number;
    id:number;
}

export type ApiMeals = Omit<Meals, "id">

export interface ApiMealsObject {
[id:string] :ApiMeals;
}