import { styled } from "styled-components";

export const RevisaoStyle = styled.section`
    width: 100%;
    height: fit-content;
    min-height: 70vh;
    background-color: #1F1F1F;
    padding: 3rem 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    h1{
        font-weight: 700;
        font-size: 40px;
        color: #EFD500;
    }
    .tipos{ 
        width: 100%;
        height: 450px;
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
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
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
                z-index: 999;
                .header{
                    font-size: 1rem;
                    color: black;
                    h1{
                        color: black;
                    }
                }
                img {
                    width: 50%;
                    height: 50%;
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
                }
            }
        }
    }

`