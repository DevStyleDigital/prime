import { styled } from "styled-components";

export const RevisaoStyle = styled.section`
    width: 100%;
    height: fit-content;
    background-color: #1F1F1F;
    padding: 3rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    position: relative;
    z-index: 1;
    h1{
        font-weight: 700;
        font-size: 40px;
        color: #EFD500;
        text-transform: uppercase;
    }
    .tipos{ 
        width: 70%;
        height: fit-content;
        min-height: 400px;
        display: flex;
        justify-content: space-between;
        gap: 6rem;
        .card{
            width: 50%;
            height: auto;
            background-color: #EFD500;
            border-radius: 30px;
            position: relative;
            cursor: pointer;
            .fundo{
                width: 100%;
                height: 100%;
                border-radius: 30px;
            }
            .content {
                padding: 2rem 0;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 30px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                gap: 1rem;
                z-index: 9;
                .header{
                    h1{
                        font-size: 2rem;
                        color: black;
                        @media (max-width: 600px) {
                            font-size: 1.5rem;
                        }
                        @media (max-width: 320px) {
                            font-size: 1rem;
                        }
                    }
                }
                .moto {
                    width: 70%;
                    height: 50%;
                    object-fit: contain;
                }
                button{
                    padding: .4rem 2.5rem;
                    background-color: black;
                    border: none;
                    border-radius: 15px;
                    color: #EFD500;
                    text-transform: uppercase;
                    font-weight: 900;
                    letter-spacing: 1px;
                    font-size: 1.3rem;
                    font-family: 'Kanit', sans-serif;
                    cursor: pointer;
                    transition: all .5s;
                    @media (max-width: 600px) {
                        padding: .2rem 1.5rem;
                        font-size: 1rem;
                    }
                    @media (max-width: 320px) {
                            font-size: .7rem;
                    }
                }
            }
            &:hover button{
                transform: scale(1.05);
            }
        }
        @media (max-width: 900px) {
            height: 70%;
            width: 70%;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            .card{
                width: 90%;
            }
        }

        @media (max-width: 600px) {
            height: 100%;
            width: fit-content;
            flex-direction: column;
            align-items: center;
            min-height: initial;
            gap: 2rem;
            .card{
                width: 90%;
                height: fit-content;
            }
        }   
    }

    @media (max-width: 600px) {
        gap: 1.5rem;
        padding: 2rem 0 0 0;
    }

`
