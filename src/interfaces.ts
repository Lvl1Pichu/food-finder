export interface IRecipe {
    id: number;
    image: string;
    title: string;
    missedIngredientCount: number;
    missedIngredients: Ingredient[];
    usedIngredientCount: number;
    usedIngredients: Ingredient[];
}

interface Ingredient {
    name: string;
}