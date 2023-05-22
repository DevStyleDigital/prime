import { styled } from "styled-components";

export const AcessoriosStyle = styled.section`
  width: 100%;
  height: fit-content;
  min-height: 50vh;
  background-color: #1f1f1f;
  padding:  0 0 3rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  h1 {
    font-weight: 700;
    font-size: 40px;
    color: #efd500;
    text-transform: uppercase;
  }
  .items {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: repeat(1fr , 6);
    width: 80%;
    height: auto;
    box-sizing: border-box;
    gap: 1rem;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 100%;
      height: 100%;
      padding: 1rem 0;
      border: 1px solid #efd500;
      border-radius: 25px;
      color: #efd500;
      transition: all .5s;
      svg{
        transition: all .5s;
      }
      &:hover{
          background-color: #efd500;
          color: black;
          svg{ 
              transform: scale(1.1);
              path{
                  stroke: rgba(0,0,0,.8);
                  fill:  rgba(0,0,0,.8);
                }
            }
        }
        @media (max-width: 950px){
            font-size: .8rem;
            svg{
                width: 30%;
            }
        }
    }
    .active {
      padding: 2rem 0 1rem 0;
    }
    .compre {
      width: 100%;
      grid-column: 5/7;
      grid-row: 1/3;
      height: 100%;
      border: 1px solid #efd500;
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      transition: all .5s;
      text-align: center;
      h1{
        font-size: 2rem;
        transition: all .5s;
      }
      svg {
        width: 20%;
        height: 20%;
        transition: all .5s;
      }
      &:hover{
        background-color: #efd500;
        
        h1{
            color: black;
        }
        svg {
            transform: scale(1.1);
            path{
                fill:  black;
            }
        }
      }

        @media (max-width: 950px){
            h1{
                font-size: 1rem;
            }
            svg{
                width: 20%;
            }
        }
        @media (max-width: 950px){
            h1{
                font-size: 1.3rem;
            }
        }

    }
    @media (max-width: 1100px){
        width: 90%;
    }
    
    @media (max-width: 700px){
        grid-template-columns: repeat(1fr , 2);
        grid-template-rows:auto;
        .compre {
            grid-column: 1/3;
            grid-row: 5/7; 
        }
    }
  }
`;
