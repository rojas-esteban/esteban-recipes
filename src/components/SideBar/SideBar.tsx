import { NavLink } from 'react-router';
import './SideBar.scss'

interface SideBarProps {
    recipes: IRecipe[],
    isLogged: boolean
}



export default function SideBar({ recipes, isLogged }: SideBarProps) {
    return (
        <nav className='sidebar'>
            <ul>
                <li>
                    <NavLink to="/">Menu</NavLink>
                </li>
                {isLogged && (<li>
                    <NavLink to="/fav">Mes recette pref ❤️</NavLink>
                </li>)}

                {recipes.map(
                    (recipe) => (
                        <li key={recipe.id}>
                            <NavLink to={`/recipes/${recipe.slug}`}>{recipe.title}</NavLink>
                        </li>
                    )
                )}


            </ul>
        </nav>
    );
}