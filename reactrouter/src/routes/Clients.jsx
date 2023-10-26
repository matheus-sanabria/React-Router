
import { Link } from "react-router-dom";

const Clients = () =>{
    return (
        <div>
            <h1>Página Clientes</h1>
            <ul>
                <li>
                    <Link to="/clientes/1">Cliente 1</Link>
                </li>
                <li>
                    <Link to="/clientes/2">Cliente 2</Link>
                </li>
                <li>
                    <Link to="/clientes/3">Cliente 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Clients;