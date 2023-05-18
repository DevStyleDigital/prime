import { ServiceArray } from "../../../assets/utils/servicos"
import { ServiceStyle } from "./style"
import FundoCard from '../../../assets/img/card.png'
const ServiceSection = () => {
    return (
        <ServiceStyle>
             <h1>Serviço</h1>
             <div className="servicos">
                {ServiceArray.map(item => (
                    <div className="card" key={item.id}>
                           <img src={FundoCard} alt="fundo card" className="fundo" />
                            <div className="container">
                                {item.icon}
                                {item.name}
                                <button>SAIBA MAIS »</button>
                            </div>
                    </div>
                ))}
             </div>
        </ServiceStyle>
    )
}

export default ServiceSection