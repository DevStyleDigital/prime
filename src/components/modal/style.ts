import { styled } from "styled-components";

export const ModalStyle = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    top: 0;
    left: 0;
    z-index: 99;
    .fundoClose {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.9);
    }
    .card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: fit-content;
        background-color: #EFD500;
        border-radius: 30px;
        .content{
            width:100%;
            min-height: fit-content;
            position: relative;
            img{
                width: 100%;
                height: 100%;
                border-radius: 30px;
                top:0;
                left: 0;
                position: absolute;
            }
            .container{
                position: relative;
                width: 100%;
                height: auto;
                .containerCard{
                    width: 100%;
                    height: 100%;
                    max-height: 700px;
                    border-radius: 30px;
                    padding: 2rem 3rem;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    overflow-y: auto;
                    .header{
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                        h1{
                            font-size: 1.5rem;
                            color: black;
                        }
                        svg{
                           scale: 0.8;
                        }
                        @media (max-width: 600px) {
                            h1{
                                font-size: 1.5rem;
                            }
                            svg{
                                scale: 0.6;
                            }
                            gap: 1rem;
                        }
                        @media (max-width: 320px) {
                            h1{
                                font-size: 1rem;
                            }
                            svg{
                                scale: 0.5;
                            }
                            gap: 0;
                        }
                    }
                    .modalBody{
                        overflow-y: auto;
                        color: black;
                        > div {
                            display: flex;
                            flex-direction: column;
                            gap: .5rem;
                        }
                        h1{
                            font-size: 1rem;
                            color: black;
                        }
                        ul{
                            list-style: none;
                            display: flex;
                            flex-direction: column;
                            gap: .2rem;
                            li{
                                font-size: .8rem;
                                color: black;
                                font-weight: 500;
                            }
                        }
                    /* Works on Firefox */
                  
                        scrollbar-width: thin;
                        scrollbar-color: blue orange;
                        

                        /* Works on Chrome, Edge, and Safari */
                        &::-webkit-scrollbar {
                            width: 6px;
                        }

                        &::-webkit-scrollbar-track {
                            background: #d4d4d4;
                            border-radius: 30px;
                        }

                        &::-webkit-scrollbar-thumb {
                            background-color: #9e9e9e;
                            border-radius: 30px;
                        }
                        @media (max-width: 600px) {
                                font-size:.8rem;
                        }
                    }
                    @media (max-width: 600px) {
                        gap: 1rem;
                    }
                }
            }
        }
        @media (max-width: 768px) {
                width: 70%;
                .content{
                    .container{
                        .containerCard{
                            padding: 1rem;
                        }
                    }
                }
        }
        @media (max-width: 600px) {
                width: 90%;
                .content{
                    .container{    
                        .containerCard{
                            padding: 1rem;
                        }
                    }
                }
        }
    }
`;