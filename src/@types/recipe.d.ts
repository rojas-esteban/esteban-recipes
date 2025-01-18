interface IRecipe {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    author: string;
    difficulty: string;
    description: string;
    instructions: string[];
    ingredients: IIngredient[];
}

interface IIngredient {
    name: string;
    id: number;
    quantity: number;
    unit: string;
}
