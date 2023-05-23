import { useEffect, useRef } from 'react';
import WhatsappSVG from '../../assets/svg/whatsapp';
import { ArrowStyle, WhatsappStyle } from './style';
import { ArrowIcon } from '../../style/components/icons';
import { useLayoutContext } from '../../contexts/Layout/useLayoutContext';

const WhatsappButton = () => {
  const { whatsapp, setWhatsapp } = useLayoutContext();
  const ButtonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ButtonRef.current) {
      if (whatsapp) {
        ButtonRef.current.style.right = '0';
      } else {
        ButtonRef.current.style.right = '-500px';
      }
    }
  }, [whatsapp]);
  return (
    <>
      <ArrowStyle onClick={() => setWhatsapp((prev) => !prev)}>
        <ArrowIcon />
        <span>Whatsapp</span>
      </ArrowStyle>
      <WhatsappStyle ref={ButtonRef}>
        <a target='blank' href='https://api.whatsapp.com/send?phone=5515991343172'>
          <span>
            Compre pelo <br/> Whatsapp
          </span>
        <WhatsappSVG />
        </a>
      </WhatsappStyle>
    </>
  );
};

export default WhatsappButton;
