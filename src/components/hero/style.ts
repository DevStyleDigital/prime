import { styled } from "styled-components";

export const HeroStyle = styled.section`
  width: 100%;
  height:100%;
  background-color: #1f1f1f;
  box-shadow: 0 0px 10px black;
  position: relative;
  z-index: 9;
  .mySwiper {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .mobile{
      display: none;
    }
     @media (max-width:768px){
       .mobile{
         display: block;
       }
      .desk{
        display: none;
      }
     }
  }
  @media (max-width:768px){
    height: 80vh;
  }
`;
