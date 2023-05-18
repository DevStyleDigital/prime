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
    h1{
        font-weight: 700;
        font-size: 40px;
        color: #EFD500;
    }
    .servicos {
        width: 70%;
        display: flex;
        height: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        .card {
            width: 23%;
            height: 45%;
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
                    padding: .2rem 1.5rem;
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
                }
                &:hover button{
                    transform: scale(1.05);
                }
            }
        }
    }
`;