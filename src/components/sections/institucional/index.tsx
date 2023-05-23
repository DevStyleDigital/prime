import { InstitucionalStyle } from "./style";
import fundoInstitucional from "../../../assets/img/institucional-1.jpg";
import Fachada from "../../../assets/img/fachada.jpg";
const Institucional = () => {
  return (
    <InstitucionalStyle>
      <img src={fundoInstitucional} alt="fundo" />
      <div className="wrapper">
        <div className="content">
          <div className="image">
            <img src={Fachada} alt="fachada" />
          </div>
          <div className="text">
            <h1>Prime Moto Peças</h1>
            <span>
              <p>
                A Prime é uma empresa especializada em serviços para motos em
                Sorocaba, oferecendo uma ampla variedade de opções para todos os
                tipos e estilos, tanto motos nacionais quanto importadas. Nossa
                equipe está preparada para cuidar e entregar sua moto pronta
                para rodar mais milhares de km!
              </p>
              <p>
                Com um portfólio abrangente, oferecemos serviços de reparos e
                prevenções para que motoqueiros e motociclistas tenham total
                conforto e segurança sempre que precisarem de nós, seja na
                oficina ou com acessórios.
              </p>
              <p>Nossa missão é oferecer uma experiência de excelência para todos os tipos de apaixonados pelas duas rodas.</p>
            </span>
          </div>
        </div>
      </div>
    </InstitucionalStyle>
  );
};

export default Institucional;
