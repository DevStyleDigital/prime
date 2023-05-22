import { iAcessorios } from "../../../types/acessorios";
import Antena from "../../svg/antena";
import Bau from "../../svg/bau";
import Capacete from "../../svg/capacete";
import Capas from "../../svg/capas";
import Celular from "../../svg/celular";
import Jaqueta from "../../svg/jaqueta";
import Lubrificantes from "../../svg/lubrificantes";
import Trava from "../../svg/trava";

export const AcessoriosArray:iAcessorios[] = [
    {
        id: 1,
        nome: 'Suporte Celular',
        icon: <Celular />
    },
    {
        id: 2,
        nome: 'Antena Corta Pipa',
        icon: <Antena />
    },
    {
        id: 3,
        nome: 'Jaquetas e Luvas',
        icon: <Jaqueta />
    },
    {
        id: 4,
        nome: 'Báu',
        icon: <Bau />
    },
    {
        id: 5,
        nome: 'Capas de chuva',
        icon: <Capas />
    },
    {
        id: 6,
        nome: 'Capacetes',
        icon: <Capacete />
    },
    {
        id: 7,
        nome: 'Trava de Segurança',
        icon: <Trava />
    },
    {
        id: 8,
        nome: 'Lubrificantes Gerais',
        icon: <Lubrificantes />
    },
]