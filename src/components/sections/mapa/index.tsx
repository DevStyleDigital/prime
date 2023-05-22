import { MapaStyle } from "./style"

const Mapa = () => {
    return (
        <MapaStyle>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234128.05470030542!2d-47.795408405468734!3d-23.52347829999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58b6275079c9b%3A0x54763b8fd0d6705e!2sPRIME%20MOTO%20PE%C3%87AS!5e0!3m2!1spt-BR!2sbr!4v1684758489544!5m2!1spt-BR!2sbr" style={{border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </MapaStyle>
    )
}

export default Mapa