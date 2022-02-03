import { moveIcon } from '@assets/imgs';
import { ReactElement } from 'react';
import * as S from './Style';

const MoveIcon = (): ReactElement => (
  <S.Button>
    <img src={moveIcon} alt="moveIcon" />
  </S.Button>
);

export default MoveIcon;
