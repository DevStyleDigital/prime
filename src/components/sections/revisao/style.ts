import { styled } from "styled-components";

export const RevisaoStyle = styled.section`
    width: 100%;
    height: fit-content;
    min-height: 70vh;
    background-color: #1F1F1F;
    padding: 3rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    position: relative;
    h1{
        font-weight: 700;
        font-size: 40px;
        color: #EFD500;
    }
    .tipos{ 
        width: 70%;
        height: 400px;
        display: flex;
        justify-content: space-between;
        gap: 6rem;
        .card{
            width: 50%;
            height: 100%;
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
                z-index: 9;
                .header{
                    font-size: 1rem;
                    color: black;
                    h1{
                        color: black;
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
                }
            }

            &:hover button{
                transform: scale(1.05);
            }
        }
    }

`