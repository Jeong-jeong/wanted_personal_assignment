import { useCheckSameId } from '@hooks';
import { searchTag, cancelTag } from '@assets/imgs';
import * as S from './Style';

export interface TagProps {
  activedId: number;
  productId: number;
  // pointX: number;
  // pointY: number;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tag = ({ activedId, productId }: TagProps) => {
  const [isActive] = useCheckSameId(activedId, productId);

  return (
    // <S.TagWrapper pointX={pointX} pointY={pointY}>
    <S.TagImage
      src={isActive ? cancelTag : searchTag}
      alt={isActive ? 'cancelTag' : 'searchTag'}
    />
    // </S.TagWrapper>
  );
};

export default Tag;
