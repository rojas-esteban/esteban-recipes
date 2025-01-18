import './Header.scss'
import { Button, Input, Image } from "semantic-ui-react";
import logo from "../../assets/logo.png"


export default function Header() {
    return (
        <header className='myheader'>
            <Image size='mini' src={logo} alt="logo orecipes" />
            <form action="">
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="password" />
                <Button primary type="submit" >OK</Button>
            </form>

        </header>

    );
}