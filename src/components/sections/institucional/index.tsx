import { InstitucionalStyle } from "./style";
import fundoInstitucional from "../../../assets/img/institucional-1.png";
import Fachada from "../../../assets/img/fachada-1.png";
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis
                    at erat pellentesque adipiscing commodo. Lectus arcu bibendum at
                    varius vel pharetra vel turpis. Sed nisi lacus sed viverra tellus
                    in. Mauris cursus mattis molestie a iaculis at erat pellentesque
                    adipiscing. Pellentesque dignissim enim sit amet venenatis urna.
                    Morbi enim nunc faucibus a pellentesque. Pretium viverra suspendisse
                    potenti nullam ac tortor. Lacus sed viverra tellus in hac. Facilisis
                    magna etiam tempor orci eu. Suscipit adipiscing bibendum est
                    ultricies integer quis auctor elit. Volutpat maecenas volutpat
                    blandit aliquam. Adipiscing at in tellus integer feugiat scelerisque
                    varius morbi enim. Metus aliquam eleifend mi in nulla.
                </span>
            </div>
        </div>
      </div>
    </InstitucionalStyle>
  );
};

export default Institucional;
