import React from 'react';
import { IProductListProps } from '@types';
import { TagList } from '@components/domain';
import * as S from './Style';

const ImageViewContent = ({ storedValue }: IProductListProps) => {
  return (
    <S.ImageViewWrapper>
      <S.Image src={storedValue?.imageUrl} alt="test 이미지" />
      <TagList storedValue={storedValue} />
    </S.ImageViewWrapper>
  );
};

export default React.memo(ImageViewContent);
