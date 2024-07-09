export interface Meals {
    id: string;
    timeMeal: string;
    description: string;
    calories: number;
}

export interface MealMutation {
    timeMeal:string
    description:string;
    calories:string;
}

export type ApiMeals = Omit<Meals, "id">

export interface ApiMealsObject {
[id:string] :ApiMeals;
}