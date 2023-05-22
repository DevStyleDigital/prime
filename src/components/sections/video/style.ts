import { styled } from "styled-components";

export const VideoStyle = styled.section`
    width: 100%;
    height: 80vh;
    background-color: #1f1f1f;
    position: relative;
    .video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(0, -10%);
        display: flex;
        justify-content: center;
        iframe {
            width: 90%;
            height: 100%;
            border: none;
            @media (max-width: 1440px){
                width: 80%;
            }
            @media (max-width: 768px){
                width: 90%;
            }
        }
    }
    @media (max-width: 1024px){
        height: 60vh;
    }
    @media (max-width: 768px){
        height: 50vh;
    }
    @media (max-width: 600px){
        height: 40vh;
    }
`