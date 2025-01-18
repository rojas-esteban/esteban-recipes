import { Button, Card, CardGroup } from 'semantic-ui-react'
import "./Page.scss"



export default function MainPage() {
    return (
        <main className='page'>
            <h1>Les Recettes</h1>
            <p>Voici nos 6 recettes</p>

            <CardGroup itemsPerRow={2}>
                <Card
                    image='https://www.sunny-delices.fr/wp-content/uploads/2022/09/cookies-beurre-cacahouettes-sans-gluten-680x451.jpg'
                    header='Elliot Baker'
                    meta='Friend'
                    description={<Button primary>Voir la recette</Button>}

                />
                <Card
                    image='https://www.sunny-delices.fr/wp-content/uploads/2022/09/cookies-beurre-cacahouettes-sans-gluten-680x451.jpg'
                    header='Elliot Baker'
                    meta='Friend'
                    description={<Button primary>Voir la recette</Button>}

                />
                <Card
                    image='https://www.sunny-delices.fr/wp-content/uploads/2022/09/cookies-beurre-cacahouettes-sans-gluten-680x451.jpg'
                    header='Elliot Baker'
                    meta='Friend'
                    description={<Button primary>Voir la recette</Button>}

                />
                <Card
                    image='https://www.sunny-delices.fr/wp-content/uploads/2022/09/cookies-beurre-cacahouettes-sans-gluten-680x451.jpg'
                    header='Elliot Baker'
                    meta='Friend'
                    description={<Button primary>Voir la recette</Button>}

                />


            </CardGroup>


        </main>
    )
}