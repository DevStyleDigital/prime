import { iService } from "../../../types/revisao";
import MotoBase from '../../img/moto-1.png'
import MotoPremium from '../../img/moto-2.png'
export const ServicosArray: iService[] = [
    {
        id: 1,
        name: 'Revisão Básica',
        image: MotoBase,
        text: <ul>
            <li>- Limpeza de bico de injeção (injetadas) ou limpeza carburador (carburadas)</li>
            <li>- Regulagem de válvulas (exceto pastilhada)</li>
            <li>- Lubrificação de comandos (punho de luz/ descansos/ botão de buzina/ pisca) e cabos</li>
            <li>- Calibragem de pneus</li>
            <li>- Verificação de itens básicos (filtros/ vela/ freios/ cabos/ lâmpadas e fluidos)</li>
            <li>- Ajustes de parafusos/ travas soltas</li>
        </ul>
    },
    {
        id: 2,
        name: 'Revisão Premium',
        image: MotoPremium,
        text: 
        <div>
            <h1>REVISÃO (PREMIUM) – 200/300 – INJETADA – MÃO DE OBRA</h1>
            <ul>
                <li>- Limpeza de bico de injeção e tbi (corpo de injeção) ou carburador (carburadas)</li>
                <li>- Pastilhamento de cabeçote</li>
                <li>- Regulagem de válvulas</li>
                <li>- Lubrificação de comandos (punho de luz/ descansos/ botão de buzina/ pisca)</li>
                <li>- Calibragem de pneus</li>
                <li>- Verificação de itens básicos (filtros/ vela/ freios/ cabos/ lâmpadas)</li>
                <li>- Ajustes de parafusos/ travas soltas</li>
                <li>- Troca de fluídos de suspensão</li>
                <li>- Lubrificação de bucha do quadro elástico</li>
                <li>- Limpeza e lubrificação sistema de freio (lona ou pastilha)</li>
                <li>- Limpeza e lubrificação de rolamentos de rodas</li>
                <li>- Troca de fluído de freio (motos à disco)</li>
                <li>- Alinhamento frontal (mesa/ bengala) se necessário (exceto chassi)</li>
                <li>- Revisão sistema elétrico</li>
            </ul>
        </div>
    }
]

