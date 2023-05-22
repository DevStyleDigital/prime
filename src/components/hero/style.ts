import { styled } from "styled-components";

export const HeroStyle = styled.section`
    width: 100%;
    height: 70vh;
    background-color: #1F1F1F;
    box-shadow: 0 0px 10px black;
    position: relative;
    z-index: 9;
    .mySwiper {
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`