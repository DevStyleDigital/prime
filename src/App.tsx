import Header from "./components/header"
import Hero from "./components/hero"
import Revisao from "./components/sections/revisao"
import ServiceSection from "./components/sections/servicos";

 export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Revisao />
      <ServiceSection />
    </>
  )
}

export default App
