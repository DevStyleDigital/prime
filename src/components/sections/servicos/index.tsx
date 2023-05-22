import { ServiceArray } from "../../../assets/utils/servicos"
import { ServiceStyle } from "./style"
import FundoCard from '../../../assets/img/card.png'
import { useState } from "react"
import { iService } from "../../../types/services"
import ModalContent from "../../modal"
const ServiceSection = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [items , setItems] = useState({} as iService);

    return (
        <>
            <ServiceStyle>
                <h1>Serviço</h1>
                <div className="servicos">
                    {ServiceArray.map(item => (
                        <div className="card" key={item.id} aria-label="Toggle modal" onClick={() => {
                            setIsOpenModal(true)
                            setItems(item)
                        }}>
                            <img src={FundoCard} alt="fundo card" className="fundo" />
                                <div className="container">
                                    {item.image}
                                    {item.name}
                                    <button>SAIBA MAIS »</button>
                                </div>
                        </div>
                    ))}
                </div>
            </ServiceStyle>
            <ModalContent name={items.name} aria="ModalService" texto={items.texto} icon={items.image} isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal}/>
        </>
    )
}

export default ServiceSection