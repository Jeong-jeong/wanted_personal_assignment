import { IProductListProps } from '@types';
import { ImageView, TagList } from '@components/domain';
import * as S from './Style';

const ImageViewContent = ({ storedValue }: IProductListProps) => (
  <S.Center>
    <ImageView storedValue={storedValue} />
    <TagList storedValue={storedValue} />
  </S.Center>
);

export default ImageViewContent;
