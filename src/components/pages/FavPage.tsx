import { useEffect, useState } from "react"
import { axiosInstance } from "../../axios/aciosInstance"
import { Card, CardGroup } from "semantic-ui-react"
import { Link } from "react-router"




export default function FavPage() {

    const [myFavorites, setMyFavorites] = useState<null | IRecipe[]>(null)

    useEffect(() => {

        const getFavorites = async () => {

            try {
                const response = await axiosInstance.get('favorites')
                console.log(response.data.favorites);
                setMyFavorites(response.data.favorites)
            } catch (error) {
                console.log(error);

            }

        };

        getFavorites();

    }, [])



    return (
        <main className='page'>
            <h1>Tes recettes Pref!!!</h1>

            <CardGroup itemsPerRow={2}>
                {myFavorites?.map((recipe) => (
                    <Card
                        key={recipe.id}
                        image={recipe.thumbnail}
                        header={recipe.title}
                        meta={recipe.difficulty}
                        description={<Link to={`/recipes/${recipe.slug}`}>Voir la recette</Link>}
                    />
                ))}
            </CardGroup>



        </main>
    )
}