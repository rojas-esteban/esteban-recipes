import { Button, Card, CardGroup } from 'semantic-ui-react'
import "./Page.scss"
import { Link } from 'react-router'

//En cas d'envoyer une nouvelle prop à ce composant, ajoutez-la à l'interface:

interface MainPageProps {
    recipes: IRecipe[]
}



export default function MainPage({ recipes }: MainPageProps) {
    return (
        <main className='page'>
            <h1>Les Recettes</h1>
            <p>Voici nos 6 recettes</p>


            <CardGroup itemsPerRow={2}>
                {recipes.map(
                    (recipe) => (

                        <Card
                            key={recipe.id}
                            image={recipe.thumbnail}
                            header={recipe.title}
                            meta={recipe.difficulty}
                            description={<Link to={`/recipes/${recipe.slug}`}>Voir la recette</Link>}

                        />

                    )
                )};



            </CardGroup>


        </main>
    )
}