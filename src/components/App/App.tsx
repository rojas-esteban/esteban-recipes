import "./App.scss"
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import MainPage from "../pages/MainPage";
import { useEffect, useState } from "react";
import axios from "axios";
import LoaderExampleText from "../Loader/Loader";

function App() {

    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(
        () => {
            const getRecipes = async () => {
                try {
                    const response = await axios.get("https://orecipesapi.onrender.com/api/recipes")
                    //console.log(response.data);
                    setRecipes(response.data)


                } catch (error) {
                    console.log(`este es el error : ${error}`);

                } finally {
                    setIsLoading(false)
                }
            };

            getRecipes()

        }, []
    )



    return (
        <div className="app">


            <SideBar recipes={recipes} />

            <div className="rightbloc">
                <Header />
                {isLoading && <LoaderExampleText />}
                <MainPage recipes={recipes} />
            </div>

        </div>
    )

}

export default App;