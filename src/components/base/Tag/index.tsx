import { useCheckSameId } from '@hooks';
import { searchTag, cancelTag } from '@assets/imgs';
import * as S from './Style';

export interface TagProps {
  activedId: number;
  productId: number;
}

const Tag = ({ activedId, productId }: TagProps) => {
  const [isActive] = useCheckSameId(activedId, productId);

  return (
    <S.TagImage
      src={isActive ? cancelTag : searchTag}
      alt={isActive ? 'cancelTag' : 'searchTag'}
    />
  );
};

export default Tag;
