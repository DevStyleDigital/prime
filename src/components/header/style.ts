import { styled } from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    padding: 1rem 4rem;
    background: linear-gradient(180deg, #1F1F1F 0%, #000000 95.54%);
    display: flex;
    position: relative;
    z-index: 9;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 60;
    box-shadow: 0 0px 10px black;
    .buttons {
        display: flex;
        align-items: center;
        gap: 1rem;
        .whatsapp{
            text-transform: uppercase;
            color: #EFD500;
            background-color: transparent;
            font-weight: 600;
            padding: .6rem 1.5rem;
            border: 1px solid #EFD500;
            border-radius: 15px;
            transition: all .5s;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: .7rem;
            svg path{
                transition: all .5s;
            }
            &:hover{
                color: black;
                background-color: #EFD500;
                border: none;
                svg path {
                    fill: #000000;
                }
            }
            @media (max-width: 550px){
                font-size: .7rem;
                padding: .6rem .8rem;
                border-radius: 10px;
            }
            @media (max-width: 375px){
                font-size: .7rem;
                padding: .5rem .7rem;
            }
            @media (max-width: 360px){
                font-size: .6rem;
                padding: .2rem .4rem;
                border-radius: 7px;
                svg{
                    transform: scale(0.7);
                }
            }
            @media (max-width: 320px){
                font-size: .5rem;
            }
        }
        .icon{
            transition: all .5s;
            &:hover{
                transform: scale(1.2);
            }
        }
        
        svg{
            cursor: pointer;
        }
    }
    @media (max-width: 550px){
        padding: 1rem 1rem;
    }
`