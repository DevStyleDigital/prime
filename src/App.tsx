import Footer from "./components/footer";
import Header from "./components/header"
import Hero from "./components/hero"
import Acessorios from "./components/sections/acessorios";
import Institucional from "./components/sections/institucional";
import Mapa from "./components/sections/mapa";
import Revisao from "./components/sections/revisao"
import ServiceSection from "./components/sections/servicos";
import Video from "./components/sections/video";
import WhatsappButton from "./components/whatsapp";
import { useLayoutContext } from "./contexts/Layout/useLayoutContext";

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
  const { setWhatsapp } = useLayoutContext();
  return (
    <>
      <WhatsappButton />
      <div onClick={() => setWhatsapp(false)}>
        <Header />
        <Hero />
        <Revisao />
        <ServiceSection />
        <Acessorios />
        <Institucional />
        <Video />
        <Mapa />
        <Footer />
      </div>
    </>
  )
}

export default App
