import React, { useEffect } from "react"
import { ModalStyle } from "./style"
import FundoCard from "../../assets/img/fundo-card-servico.png"
import { CloseIcon } from "../../style/components/icons"

interface ModalProps {
  isModalOpen: boolean,
  setIsModalOpen: any,
  aria: string,
  icon?: React.ReactNode, 
  name: React.ReactNode,
  texto: React.ReactNode,
}
const ModalContent = ({ isModalOpen, setIsModalOpen, aria, icon, name, texto }: ModalProps) => {
  
  useEffect(() => {
    document.addEventListener('keydown', ({ key }) => key === 'Escape' && setIsModalOpen(false));
    return document.removeEventListener('keydown', () => false);
  }, []);


  useEffect(() => {
    if(isModalOpen){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen])
  
  return (
    <>
    {isModalOpen && ( 
      <ModalStyle aria-labelledby={aria}>
          <div className="fundoClose" onClick={() => setIsModalOpen(false)}></div>
          <div className="card">
            <div className="content">
              <img src={FundoCard} alt="fundo-card" />
              <div className="container">
                <div className="containerCard">
                  <CloseIcon onClick={() => setIsModalOpen(false)} />
                  <div className="header">
                    {icon}
                    <h1>{name}</h1>
                  </div>
                  <div className="modalBody">
                    {texto}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </ModalStyle>
    )}
    </>
  )
}

export default ModalContent