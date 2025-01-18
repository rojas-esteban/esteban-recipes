import { useEffect, useState } from "react";
import "./App.scss"
import axios from "axios";
import { Route, Routes, useLocation } from "react-router";

// sous composants
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import MainPage from "../pages/MainPage";
import LoaderExampleText from "../Loader/Loader";
import RecipePage from "../pages/RecipePage";
import NotFoundPage from "../pages/!notFoundPage";

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
    );

    //scroll to the top
    const location = useLocation();
    console.log(location);
    useEffect(() => {
        // scroll en haut de page
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <div className="app">


            <SideBar recipes={recipes} />

            <div className="rightbloc">
                <Header />
                {isLoading && <LoaderExampleText />}
                <Routes >

                    <Route path="/" element={<MainPage recipes={recipes} />} />
                    <Route path="/recipes/:slug" element={<RecipePage />} />
                    <Route path="/*" element={<NotFoundPage />} />

                </Routes>



            </div>

        </div>
    )

}

export default App;