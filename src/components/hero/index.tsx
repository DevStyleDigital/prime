
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { HeroStyle } from "./style";
import Agenda from "../../assets/img/banners/desktop/Agende_o_seu_serviço.png"
import Oleo from "../../assets/img/banners/desktop/Oleo.png"
import Revisao from "../../assets/img/banners/desktop/Revisão_da_sua_Moto_.png"
import Suporte from "../../assets/img/banners/desktop/Suporte_.png"
import Tudo from "../../assets/img/banners/desktop/Tudo_Para_Sua_Moto.png"
import AgendaMobile from "../../assets/img/banners/mobile/Agende_o_seu_serviço_400x600.png"
import OleoMobile from "../../assets/img/banners/mobile/Oleo400x600.png"
import RevisaoMobile from "../../assets/img/banners/mobile/Revisão_da_sua_Moto_400x600.png"
import SuporteMobile from "../../assets/img/banners/mobile/Suporte_400x600.png"
import TudoMobile from "../../assets/img/banners/mobile/Tudo_Para_Sua_Moto_400x600.png"

const Hero = () => {
    return (
        <HeroStyle>
            <Swiper
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Agenda} alt="banner 1" className="desk" />
                    <img src={AgendaMobile} alt="banner 1" className="mobile" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Oleo} alt="banner 2"  className="desk" />
                    <img src={OleoMobile} alt="banner 2"  className="mobile" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Revisao} alt="banner 3"  className="desk" />
                    <img src={RevisaoMobile} alt="banner 3"  className="mobile" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Suporte} alt="banner 4" className="desk" />
                    <img src={SuporteMobile} alt="banner 4"  className="mobile" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Tudo} alt="banner 5"  className="desk" />
                    <img src={TudoMobile} alt="banner 5"  className="mobile" />
                </SwiperSlide>
            </Swiper>
        </HeroStyle>
    )
}

export default Hero