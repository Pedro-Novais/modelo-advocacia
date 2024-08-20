import { IoIosPaper } from "react-icons/io";
import background from "../../../assets/background.png"
import "./style.css"

function Begin() {
    return (
        <div className="containerImageBackground">
            <img src={background} alt="" />
            <div className="containerTextBegin">
                <h2>+De 10 anos de experiência</h2>
                <p>Nas áreas Trabalhista, Previdenciária, Cível, Família, Cálculo Trabalhista e Previdenciário</p>

                <div className="btnMarkBanner">
                    Consulta
                    <IoIosPaper />
                </div>
            </div>
        </div>
    )
}

export default Begin