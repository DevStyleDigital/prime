
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { HeroStyle } from "./style";
import HeroImg from "../../assets/img/hero.jpg"

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
                    <img src={HeroImg} alt="banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HeroImg} alt="banner 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HeroImg} alt="banner 3" />
                </SwiperSlide>
            </Swiper>
        </HeroStyle>
    )
}

export default Hero