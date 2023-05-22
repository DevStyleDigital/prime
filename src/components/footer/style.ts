import { styled } from "styled-components";

export const FooterStyle = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #1f1f1f;
  justify-content: space-between;
  .wrap {
    width: 100%;
    display: flex;
    height: auto;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      padding: 0 2rem;
      align-items: center;
      gap: 2rem;
      .text {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        span {
          width: 100%;
          color: #efd500;
          font-weight: 400;
          @media (max-width: 870px) {
            text-align: center;
          }
        }
        h1 {
          color: #efd500;
          @media (max-width: 870px) {
            text-align: center;
          }
        }
      }
      @media (max-width: 870px) {
        flex-direction: column;
      }
    }
    .icons {
      position: relative;
      display: flex;
      .buttons {
        display: flex;
        align-items: center;
        gap: 1rem;
        .whatsapp {
          text-transform: uppercase;
          text-decoration: none;
          color: #efd500;
          background-color: transparent;
          font-weight: 600;
          padding: 0.6rem 1.5rem;
          border: 1px solid #efd500;
          border-radius: 15px;
          transition: all 0.5s;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          svg path {
            transition: all 0.5s;
          }
          &:hover {
            color: black;
            background-color: #efd500;
            border: none;
            svg path {
              fill: #000000;
            }
          }
        }
        .icon {
          transition: all 0.5s;
          &:hover {
            transform: scale(1.2);
          }
        }

        svg {
          cursor: pointer;
        }
        @media (max-width: 870px) {
          flex-direction: column;
        }
      }

      @media (max-width: 870px) {
        flex-direction: column;
        .pattern {
          display: none;
        }
      }
    }
    @media (max-width: 870px) {
      flex-direction: column;
      padding: 2rem;
      gap: 2rem;
    }
  }
  .credit {
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efd500;
    a {
      color: black;
      text-decoration: none;
    }
  }
`;
