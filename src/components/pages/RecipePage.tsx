import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router"
import LoaderExampleText from "../Loader/Loader";
import { axiosInstance } from "../../axios/aciosInstance";

interface IrecipePage {
    error: boolean,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
}


export default function RecipePage({ error, setError }: IrecipePage) {

    const [selectedRecipe, setSelectedRecipe] = useState<null | IRecipe>(null);
    //const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const params = useParams()
    const urlSlug = params.slug

    //console.log(urlSlug);

    useEffect(() => {

        //console.log('heeeeeeeeeeer');
        const getRecipe = async () => {
            try {
                const response = await axiosInstance.get(`/recipes/${urlSlug}`)
                //console.log(response.data);
                setSelectedRecipe(response.data)
                setIsLoading(false)
            } catch (error) {
                setError(true)

            }

        };
        getRecipe();
    }, [urlSlug])


    if (error) {
        return (
            <Navigate to="/error" />
        )
    }

    if (isLoading) {
        return (
            <LoaderExampleText />
        )
    }

    return (
        <main className='page'>
            <h1>{selectedRecipe?.title}</h1>
            <img src={selectedRecipe?.thumbnail} alt="" />
            <ul>
                {selectedRecipe?.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>
                        {ingredient.quantity}{ingredient.unit}  {ingredient.name}
                    </li>
                ))}
            </ul>

            <h2>Instructions</h2>

            <ul>
                {selectedRecipe?.instructions.map((instruction) => (
                    <li key={instruction}>{instruction}</li>
                ))}
            </ul>

        </main>
    )



}