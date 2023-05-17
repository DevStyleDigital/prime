import { styled } from "styled-components";

export const ModalStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.9);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    top: 0;
    left: 0;
    z-index: 99;
    overflow: hidden !important;
`;