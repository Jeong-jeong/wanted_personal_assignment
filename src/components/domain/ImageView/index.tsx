import { IProductList } from '@types';
import { TagList } from '@components/domain';
import * as S from './Style';

interface ImageViewProps {
  storedValue: IProductList;
}

const ImageView = ({ storedValue }: ImageViewProps) => {
  return (
    <S.ImageViewWrapper>
      <S.Image src={storedValue.imageUrl} alt="test 이미지" />
      <TagList storedValue={storedValue} />
    </S.ImageViewWrapper>
  );
};

export default ImageView;
