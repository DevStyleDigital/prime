import { styled } from "styled-components";

export const InstitucionalStyle = styled.section`
    width: 100%;
    height: fit-content;
    position: relative;
    padding: 3rem 3rem 4rem 3rem;
    >img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
    }
    .wrapper {
        width:100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        .content {
            width: 80%;
            height: auto;
            min-height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4rem;
            .image {
                width: 50%;
                height: 100%;
                position: relative;
                display: flex;
                justify-content: end;
                align-items: center;
                img{
                    width: 80%;
                    height: 70%;
                    box-shadow: 0 0 30px rgba(0,0,0, .5);
                }
            }
            .text {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: .5rem;
                h1{
                    font-size: 3rem;
                }
                span{
                    width: 100%;
                }
                @media (max-width: 1440px){
                    h1{
                        font-size: 2rem;
                    }
                    span{
                        font-size: .9rem;
                    }
                }
                @media (max-width: 1150px){
                    h1{
                        font-size: 1.5rem;
                    }
                    span{
                        font-size: .8rem;
                    }
                }
                @media (max-width: 950px){
                    h1{
                        font-size: 1rem;
                    }
                    span{
                        font-size: .6rem;
                    }
                }
                @media (max-width: 500px){
                    span{
                        font-size: .8rem;
                    }
                }
            }
            @media (max-width: 1700px){
            gap: 3rem;
            min-height: 500px;
            }
            @media (max-width: 1440px){
            min-height: 400px;
            }
            @media (max-width: 1150px){
            min-height: initial;
            }
            @media (max-width: 768px){
                width: 100%;
                flex-direction: column;
                gap: 1rem;
                .image{
                    width: 100%;
                    justify-content: center;
                    img{
                        height: 100%;
                    }
                }
                .text{
                    width: 100%;
                    text-align: center;
                }
            }
        }
       
    }
    @media (max-width: 600px){
        padding: 2rem 2rem 3rem 2rem;
    }
`