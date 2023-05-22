import WhatsappIcon from "../../../assets/svg/whatsapp";
import { AcessoriosArray } from "../../../assets/utils/acessorios";
import { AcessoriosStyle } from "./style";

const Acessorios = () => {
  return (
    <AcessoriosStyle>
      <h1>Acessórios</h1>
      <div className="items">
        {AcessoriosArray.map((item) => (
          <div className={item.id === 2 ? "active item" : "item"} key={item.id}>
            {item.icon}
            {item.nome}
          </div>
        ))}
        <div className="compre">
          <WhatsappIcon />
          <h1>
            Compre Pelo <br /> Whatsapp{" "}
          </h1>
        </div>
      </div>
    </AcessoriosStyle>
  );
};

export default Acessorios;
