import { RevisaoStyle } from "./style"
import FundoCard from "../../../assets/img/fundo-card-servico.png"
import MotoBasico from "../../../assets/img/moto-1.png"
import MotoPremium from "../../../assets/img/moto-2.png"
import ModalContent from "../../modal"
import { useState } from "react"

const Revisao = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <>
            <RevisaoStyle>
                <h1>Revisão</h1>
                <div className="tipos">
                    <div className="r-basica card" onClick={() => setIsOpenModal(true)}>
                        <img src={FundoCard} alt="fundo card" className="fundo" />
                        <div className="content">
                            <div className="header">
                                <h1>Revisão Básica</h1>
                            </div>
                            <img src={MotoBasico} alt="Moto-basica" className="moto"/>
                            <button>SAIBA MAIS »</button>
                        </div>
                    </div>
                    <div className="r-premium card">
                        <img src={FundoCard} alt="fundo card" className="fundo" />
                        <div className="content">
                            <div className="header">
                                <h1>Revisão Premium</h1>
                            </div>
                            <img src={MotoPremium} alt="Moto-basica" className="moto"/>
                            <button>SAIBA MAIS »</button>
                        </div>
                    </div>
                </div>
            <ModalContent isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal}/>
            </RevisaoStyle>
        </>
    )
}

export default Revisao