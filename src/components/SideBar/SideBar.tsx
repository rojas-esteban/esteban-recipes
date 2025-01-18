import { NavLink } from 'react-router';
import './SideBar.scss'

interface SideBarProps {
    recipes: IRecipe[]
}



export default function SideBar({ recipes }: SideBarProps) {
    return (
        <nav className='sidebar'>
            <ul>
                <li>
                    <NavLink to="/">Menu</NavLink>
                </li>

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