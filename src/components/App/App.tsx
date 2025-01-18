import "./App.scss"
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import MainPage from "../pages/MainPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [recipes, setRecipes] = useState<IRecipe[]>([])


    useEffect(
        () => {
            const getRecipes = async () => {
                try {
                    const response = await axios.get("https://orecipesapi.onrender.com/api/recipes")
                    //console.log(response.data);
                    setRecipes(response.data)


                } catch (error) {
                    console.log(`este es el error : ${error}`);

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
                <MainPage recipes={recipes} />
            </div>

        </div>
    )

}

export default App;