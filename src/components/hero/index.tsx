
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { HeroStyle } from "./style";
import Agenda from "../../assets/img/banners/desktop/AnyConv.com__Agende o seu serviço.webp"
import Capacete from "../../assets/img/banners/desktop/Oferta-capacete.jpg"
import Revisao from "../../assets/img/banners/desktop/AnyConv.com__Revisão da sua Moto_.webp"
import Seguranca from "../../assets/img/banners/desktop/oferta-seguranca.jpg"
import Tudo from "../../assets/img/banners/desktop/AnyConv.com__Tudo_Para_Sua_Moto.webp"
import AgendaMobile from "../../assets/img/banners/mobile/AnyConv.com__Agende o seu serviço 400x600.webp"
import CapaceteMobile from "../../assets/img/banners/mobile/Oferta-capacete-mobile.jpg"
import RevisaoMobile from "../../assets/img/banners/mobile/AnyConv.com__Revisão da sua Moto 400x600.webp"
import SegurancaMobile from "../../assets/img/banners/mobile/oferta-seguranca-mobile.jpg"
import TudoMobile from "../../assets/img/banners/mobile/AnyConv.com__Tudo_Para_Sua_Moto 400x600.webp"

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
                    <img src={Capacete} alt="banner 2"  className="desk" />
                    <img src={CapaceteMobile} alt="banner 2"  className="mobile" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Revisao} alt="banner 3"  className="desk" />
                    <img src={RevisaoMobile} alt="banner 3"  className="mobile" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Seguranca} alt="banner 4" className="desk" />
                    <img src={SegurancaMobile} alt="banner 4"  className="mobile" />
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