import logo from "../../assets/logo.png"
import { IoIosPaper } from "react-icons/io";
import "./style.css"

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <li>Inicio</li>
                    <li>Serviços</li>
                    <li>Sobre</li>
                    <li>Fale Conosco</li>
                </ul>
            </nav>
            <div className="containerMarkHeader">
                <div className="btnMarkHeader">
                    Consulta
                    <IoIosPaper />
                </div>
            </div>
        </header>
    )
}

export default Header