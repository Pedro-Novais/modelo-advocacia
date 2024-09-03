import { VscLaw } from "react-icons/vsc";
import { GiClawHammer } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import "./style.css"

function Services() {
    const infos = [
        {
            title: "Direito Trabalhista",
            icon: <VscLaw />,
            infos: [
                "Dispensa por Justa Causa",
                "Limbo Jurídico trabalhista previdenciário",
                "Equiparação Salarial",
                "Redução do intervalo intrajornada",
                "Horas extras",
                "Recisão Indireta",
                "Insalubridade",
            ]
        },
        {
            title: "Direito Trabalhista",
            icon: <GiClawHammer />,
            infos: [
                "Dispensa por Justa Causa",
                "Limbo Jurídico trabalhista previdenciário",
                "Equiparação Salarial",
                "Redução do intervalo intrajornada",
                "Horas extras",
                "Recisão Indireta",
                "Insalubridade",
            ]
        },
        {
            title: "Direito Trabalhista",
            icon: <GoLaw />,
            infos: [
                "Dispensa por Justa Causa",
                "Limbo Jurídico trabalhista previdenciário",
                "Equiparação Salarial",
                "Horas extras",
                "Recisão Indireta",
                "Insalubridade",
            ]
        }
    ]

    return (
        <div className="containerServices">
            <h3>Atuações do nosso escritório</h3>
            <h2>
                Ajudamos pessoas e empresas nas seguintes áreas do direito
            </h2>
            <div className="containerCardServices">
                {infos.map((element, index) => (
                    <div className="cardsServices" key={index}>
                        <h3 className="titleCard">{element.title}</h3>
                        <span>
                            {element.icon}
                        </span>
                        <div className="contentInfosCard">
                            <ul>
                                {element.infos.map((info, index) => (
                                    <li key={index}>{info}</li>
                                ))} 
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services