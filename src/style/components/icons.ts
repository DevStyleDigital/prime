import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import { styled } from 'styled-components';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';

export const CloseIcon = styled(CloseOutline)`
    width: 30px;
    height: 30px;
    color: black;
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    cursor: pointer;
`;

export const ArrowIcon = styled(ArrowRightShort)`
  width: 40px;
  color: white;
  transform: rotateY(-180deg);
`;
