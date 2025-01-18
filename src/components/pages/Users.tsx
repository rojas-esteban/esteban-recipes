import "./Page.scss"

export default function Users() {

    return (
        <main className='page'>
            <h1>utilisateurs de test</h1>
            <ul className="ul-users">
                <li>
                    <p>Email:  bob@mail.io / Password:  bobo</p>
                </li>

                <li>
                    <p>Email:  alice@mail.io / Password:  al6</p>
                </li>

                <li>
                    <p>Email:  dave@mail.io / Password:  davy</p>
                </li>
            </ul>
        </main>


    )
}