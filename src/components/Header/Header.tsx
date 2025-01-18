import './Header.scss'
import { Button, Input, Image } from "semantic-ui-react";
import logo from "../../assets/logo.png"
import { addTokenToInstance, axiosInstance, removeTokenFromInstance } from '../../axios/aciosInstance';

interface HeaderProps {
    isLogged: boolean,
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>,
}



export default function Header({ isLogged, setIsLogged }: HeaderProps) {
    const checkCredentials = async (email: string, password: string) => {
        try {
            const response = await axiosInstance.post("/login", {
                email: email,
                password: password
            })
            addTokenToInstance(response.data.token)
            setIsLogged(true)
            //console.log(response.data.token);
        } catch (error) {

        }
    }

    return (
        <header className='myheader'>
            <img src={logo} alt="logo orecipes" />


            {isLogged
                ? (<Button primary type="button" onClick={() => {
                    removeTokenFromInstance()
                    setIsLogged(false)
                }} >Déconnecter</Button>)
                :
                (<form onSubmit={(eventSubmit) => {
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
                </form>)}

        </header>

    );
}