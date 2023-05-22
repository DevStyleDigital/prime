import { RevisaoStyle } from "./style"
import FundoCard from "../../../assets/img/fundo-card-servico.png"
import ModalContent from "../../modal"
import { useState } from "react"
import { ServicosArray } from "../../../assets/utils/revisao"
import { iRevisao } from "../../../types/revisao"

const Revisao = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [items , setItems] = useState({} as iRevisao);

    return (
        <>
            <RevisaoStyle style={{overflow:'hidden'}}>
                <h1>Revisão</h1>
                <div className="tipos">
                    {ServicosArray.map(item => (
                        <div className="card" key={item.id} aria-label="Toggle modal" onClick={() => {
                                setIsOpenModal(true)
                                setItems(item)
                            }}>
                            <img src={FundoCard} alt="fundo card" className="fundo" />
                            <div className="content">
                                <div className="header">
                                    <h1>{item.name}</h1>
                                </div>
                                <img src={item.image} alt="Moto" className="moto" />
                                <button>SAIBA MAIS »</button>
                            </div>
                        </div>
                    ))}
                </div>
            </RevisaoStyle>
            <ModalContent name={items.name} aria="ModalService" texto={items.texto} isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal}/>
        </>
    )
}

export default Revisao
