import styled from 'styled-components';

export const ArrowStyle = styled.button`
  width: 70px;
  height: 70px;
  background-color: #1f1f1f;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 300px;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .2rem;
  border: 1px solid #efd500;
  svg {
    fill:#efd500;
  }
  span {
      text-transform: uppercase;
      color: #efd500;
      font-size: 9px;
      text-align: center;
      font-weight: bold;
      line-height: 15px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const WhatsappStyle = styled.div`
  width: 110px;
  height: 130px;
  background-color: #1f1f1f;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 300px;
  z-index: 999;
  right: -500px;
  transition: all 0.5s;
  border: 1px solid #efd500;
  a{
    padding: 1rem 0.5rem;
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    span {
      text-transform: uppercase;
      color: #efd500;
      font-size: 11px;
      text-align: center;
      font-weight: bold;
      line-height: 15px;
    }
    svg {
      fill: #efd500;
      transform: scale(1.2);
    }
  }
  @media (min-width: 768px) {
    right: 0px !important;
  }
`;
