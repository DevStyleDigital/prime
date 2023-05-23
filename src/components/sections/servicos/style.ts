import { styled } from "styled-components";

export const ServiceStyle = styled.section`
    width: 100%;
    height: fit-content;
    min-height: 70vh;
    background-color: #1F1F1F;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    position: relative;
    padding: 0 0 3rem 0;
    h1{
        font-weight: 700;
        font-size: 40px;
        color: #EFD500;
        text-transform: uppercase;
    }
    .servicos {
        width: 70%;
        display: flex;
        height: fit-content;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        .card {
            width: 23%;
            height: auto;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            .container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 1rem;
                padding: 2rem;
                align-items: center;
                cursor: pointer;
                h1{
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: black;
                    text-align: center;
                    
                }
                button{
                    padding: .5rem 2rem;
                    background-color: black;
                    border: none;
                    border-radius: 15px;
                    color: #EFD500;
                    text-transform: uppercase;
                    font-weight: 900;
                    letter-spacing: 1px;
                    font-size: 1rem;
                    font-family: 'Kanit', sans-serif;
                    cursor: pointer;
                    transition: all .5s;
                    @media(max-width: 1140px){
                        font-size: .8rem;
                    }
                    @media (max-width: 650px) {
                        font-size: .8rem;
                        padding: .2rem 1rem;
                    }
                    @media (max-width: 375px) {
                        font-size: .6rem;
                        padding: .2rem 1rem;
                    }
                }
                &:hover button{
                    transform: scale(1.05);
                }
                @media(max-width: 1140px){
                    padding: 1rem;
                    svg{
                        width: 40%;
                    }
                    h1{
                        font-size: 1rem;
                    }
                }
                @media (max-width: 650px) {
                    h1{
                        font-size: .8rem;
                    }
                }
                @media (max-width: 320px){
                    padding: 2rem 0;
                } 
            }
            @media (max-width: 880px) {
                width: 30%;
            }
            @media (max-width: 650px) {
                width: 45%;
            }
            @media (max-width: 320px){
                width: 90%;
            } 
        }
        @media(max-width: 1700px){
            width: 85%;
        }

        @media(max-width: 1240px){
            width: 95%;
        }
        @media (max-width: 880px) {
            width: 95%;
            gap: 1rem;
        }
        @media (max-width: 650px) {
            width: 97%;
        }
        @media (max-width: 320px){
            flex-direction: column;
            align-items: center;
        } 
    }

    @media (max-width: 600px) {
        padding: 2rem 0 0 0;
    }
`;