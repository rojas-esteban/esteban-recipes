import './Header.scss'
import { Button, Input, Image } from "semantic-ui-react";
import logo from "../../assets/logo.png"
import axios from 'axios';


export default function Header() {
    const checkCredentials = async (email: string, password: string) => {
        try {
            const response = await axios.post("https://orecipesapi.onrender.com/api/login", {
                email: email,
                password: password
            })
            console.log(response.data.token);

        } catch (error) {

        }
    }

    return (
        <header className='myheader'>
            <img src={logo} alt="logo orecipes" />
            <form onSubmit={(eventSubmit) => {
                eventSubmit.preventDefault();
                const myForm = eventSubmit.currentTarget;
                const myFormData = new FormData(myForm)
                const { email, password } = Object.fromEntries(myFormData)
                checkCredentials(email as string, password as string)
                console.log(email, password);

            }}>
                <Input name="email" type="email" placeholder="email" />
                <Input name="password" type="password" placeholder="password" />
                <Button primary type="submit" >OK</Button>
            </form>

        </header>

    );
}