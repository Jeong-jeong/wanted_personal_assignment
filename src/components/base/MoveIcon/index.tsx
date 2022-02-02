import { moveIcon } from '@assets/imgs';
import * as S from './Style';

const moveToPage = (e: React.MouseEvent<HTMLSpanElement>) => {
  e.preventDefault();
  e.stopPropagation();
};

const MoveIcon = () => (
  <S.Button onClick={moveToPage}>
    <img src={moveIcon} alt="moveIcon" />
  </S.Button>
);

export default MoveIcon;
