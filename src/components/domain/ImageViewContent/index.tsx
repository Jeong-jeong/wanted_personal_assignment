import React, { useRef } from 'react';
import { IProductListProps } from '@types';
import { useImageRate } from '@hooks';
import { TagList } from '@components/domain';
import * as S from './Style';

const ImageViewContent = ({ storedValue }: IProductListProps) => {
  const imageRef = useRef(null);
  const imageRate = useImageRate(imageRef);

  return (
    <S.ImageViewWrapper>
      <S.Image ref={imageRef} src={storedValue?.imageUrl} alt="test 이미지" />
      <TagList storedValue={storedValue} rateOfImageDiff={imageRate} />
    </S.ImageViewWrapper>
  );
};

export default React.memo(ImageViewContent);
