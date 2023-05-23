import { iService } from "../../../types/services";
import EletricaIcon from "../../svg/eletrica";
import FreiosIcon from "../../svg/freios";
import ManutencaoIcon from "../../svg/manutencao";
import OleoIcon from "../../svg/oleo";
import PneuIcon from "../../svg/pneu";
import Raster from "../../svg/raster";
import TransmissaoIcon from "../../svg/transmissao";

export const ServiceArray: iService[] = [
    {
        id: 1,
        name: <h1>Manutenções <br /> Mecânicas</h1>,
        image: <ManutencaoIcon />,
        texto: "Essencial para manter a máxima performance do seu motor. Manutenções preventivas e reparadoras, retificas, troca de peças."
    },
    {
        id: 2,
        name: <h1>Manutenções <br /> Elétricas</h1>,
        image: <EletricaIcon />,
        texto: "São verificados: chicote elétrico, conectores, possíveis curtos ou até mesmo pequenas fugas de corrente. Hoje, mais do que nunca, as motos precisam do sistema elétrico funcionando perfeitamente para uma pilotagem segura."
    },
    {
        id: 3,
        name: <h1>Pneus</h1>,
        image: <PneuIcon />,
        texto: "Trabalhamos com as principais marcas de pneus do mercado e contamos com um sistema de troca seguro e eficiente."
    },
    {
        id: 4,
        name: <h1>Transmissão</h1>,
        image: <TransmissaoIcon />,
        texto: "Transmissões ou relações, são como o coração das motos. Trabalhamos com diversos tipos e marcas de qualidade."
    },
    {
        id: 5,
        name: <h1>Raster</h1>,
        image: <Raster />,
        texto: "Com as novas necessidades das motos, contar com um RASTER nos auxilia a encontrar rapidamente defeitos eletrônicos nos modulos e sensores."
    },
    {
        id: 6,
        name: <h1>Troca de Óleo</h1>,
        image: <OleoIcon />,
        texto: "Em dia, a troca de óleo é sinônimo de vida para seu motor. Junto com os filtros, é uma das principais manutenções. Se a preferência do cliente é pela agilidade, contamos com a máquina de sucção de óleo que garante segurança e rapidez em nosso serviço."
    },
    {
        id: 7,
        name: <h1>Manutenção <br /> de Freios</h1>,
        image: <FreiosIcon />,
        texto: "Pastilhas, lonas, discos e óleos de freio são os que garantem nossa parada e também segurança na pilotagem. Manter o sistema em dia salva nossos clientes de diversos riscos."
    }
]