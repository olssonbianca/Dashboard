import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav>
            <div>
                <a href='/'>
                 <img src="https://i.ibb.co/wyLkB2t/white.png" alt="white" border="0"/>
                </a>
            </div>
            <div>
                <p>Menu</p>
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/Peliculas'>Peliculas</Link>
                    </li>
                    <li>
                        <Link to='/Usuarios'>Usuarios</Link>
                    </li>
                    <li>
                        <Link to='/Usuarios'>Usuarios</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p>General</p>
                <ul>
                    <li>
                        <Link to='/Participantes'>Participantes</Link>
                    </li>
                    <li>
                        <Link to='/Configuracion'>Configuraciones</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
