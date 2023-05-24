import { MapaStyle } from "./style"

const Mapa = () => {
    return (
        <MapaStyle>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2508565770117!2d-47.49514585958965!3d-23.52347823218713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58b1d295e6761%3A0x8d6539037dc62770!2sR.%20Francisco%20Paulo%20Braion%2C%2039%20-%20Jardim%20Guadalajara%2C%20Sorocaba%20-%20SP%2C%2018045-620!5e0!3m2!1spt-BR!2sbr!4v1684967570204!5m2!1spt-BR!2sbr" style={{border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </MapaStyle>
    )
}

export default Mapa
