import { styled } from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    padding: 1rem 4rem;
    background: linear-gradient(180deg, #1F1F1F 0%, #000000 95.54%);
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 999;
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
`