import "./App.scss"
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import MainPage from "../pages/MainPage";

function App() {
    return (
        <div className="app">

            <SideBar />

            <div className="rightbloc">
                <Header />
                <MainPage />
            </div>

        </div>
    )

}

export default App;