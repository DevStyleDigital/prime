import Footer from "./components/footer";
import Header from "./components/header"
import Hero from "./components/hero"
import Acessorios from "./components/sections/acessorios";
import Institucional from "./components/sections/institucional";
import Mapa from "./components/sections/mapa";
import Revisao from "./components/sections/revisao"
import ServiceSection from "./components/sections/servicos";
import Video from "./components/sections/video";

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
      <Acessorios />
      <Institucional />
      <Video />
      <Mapa />
      <Footer />
    </>
  )
}

export default App
