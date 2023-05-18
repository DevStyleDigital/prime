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
        height: 52%;
        background-color: #EFD500;
        border-radius: 30px;
        .content{
            width:100%;
            height: 100%;
            position: relative;
            img{
                width: 100%;
                height: 100%;
                border-radius: 30px;
            }
            .container{
                top:0;
                left: 0;
                position: absolute;
                width: 100%;
                height: 100%;
                .containerCard{
                    width: 100%;
                    height: 100%;
                    border-radius: 30px;
                    padding: 2rem 3rem;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    overflow-y: auto;
                    .header{
                        display: flex;
                        align-items: center;
                        h1{
                            font-size: 2rem;
                            color: black;
                        }
                    }
                    .modalBody{
                        overflow-y: auto;
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
                    }
                }
            }
        }
        @media (max-width: 768px) {
                width: 70%;
                height: 60%;
                .content{
                    .container{
                        .containerCard{
                            padding: 1rem;
                            .header{
                                h1{
                                    font-size: 1.5rem;
                                }
                            }
                        }
                    }
                }
        }
        @media (max-width: 600px) {
                width: 90%;
                max-height: 50%;
                .content{
                    .container{    
                        .containerCard{
                            padding: 1rem;
                            .header{
                                h1{
                                    font-size: 1.5rem;
                                }
                            }
                        }
                    }
                }
        }
    }
`;