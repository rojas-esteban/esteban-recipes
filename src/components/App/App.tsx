import { useEffect, useState } from "react";
import "./App.scss"
import { Route, Routes, useLocation } from "react-router";

// sous composants
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import MainPage from "../pages/MainPage";
import LoaderExampleText from "../Loader/Loader";
import RecipePage from "../pages/RecipePage";
import NotFoundPage from "../pages/!notFoundPage";
import { addTokenToInstance, axiosInstance } from "../../axios/aciosInstance";
import FavPage from "../pages/FavPage";
import { getTokenFromLocalStorage } from "../../localstorage/localstorage";

function App() {

    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isLogged, setIsLogged] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const token = getTokenFromLocalStorage();

        if (token) {
            addTokenToInstance(token);
            setIsLogged(true);
        }
    }, []);


    useEffect(
        () => {
            const getRecipes = async () => {
                try {
                    const response = await axiosInstance.get("/recipes")
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
    //console.log(location);
    useEffect(() => {
        // scroll en haut de page
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <div className="app">

            <SideBar recipes={recipes} isLogged={isLogged} />

            <div className="rightbloc">
                <Header isLogged={isLogged} setIsLogged={setIsLogged} />
                {isLoading ? <LoaderExampleText /> :

                    (<Routes >

                        <Route path="/" element={<MainPage recipes={recipes} />} />
                        <Route path="/recipes/:slug" element={<RecipePage error={error} setError={setError} />} />
                        <Route path="/*" element={<NotFoundPage />} />
                        <Route path="/fav" element={<FavPage />} />

                    </Routes>)

                }




            </div>

        </div>
    )

}

export default App;