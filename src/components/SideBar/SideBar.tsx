import './SideBar.scss'

interface SideBarProps {
    recipes: IRecipe[]
}



export default function SideBar({ recipes }: SideBarProps) {
    return (
        <nav className='sidebar'>
            <ul>
                <li>
                    <a href="/">Menu</a>
                </li>

                {recipes.map(
                    (recipe) => (
                        <li key={recipe.id}>
                            <a href="#">{recipe.title}</a>
                        </li>
                    )
                )}


            </ul>
        </nav>
    );
}