import { ModalStyle } from "./style"

interface ModalProps {
  isModalOpen: boolean,
  setIsModalOpen: any,
  children?: React.ReactNode
}
const ModalContent = ({ children, isModalOpen, setIsModalOpen }: ModalProps) => {
  return (
    <>
    {isModalOpen && ( 
      <ModalStyle>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
        <h1>teste</h1>
      </ModalStyle>
    )}
    </>

  )
}

export default ModalContent