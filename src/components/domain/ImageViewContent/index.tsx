import React, { ReactElement, useRef } from 'react';
import { IProductListProps } from '@types';
import { useImageRate } from '@hooks';
import { TagList } from '@components/domain';
import * as S from './Style';

const ImageViewContent = ({ storedValue }: IProductListProps): ReactElement => {
  const imageRef = useRef(null);
  const imageRate = useImageRate(imageRef);

  return (
    <S.ImageViewWrapper>
      <S.Image ref={imageRef} src={storedValue?.imageUrl} alt="test 이미지" />
      <TagList storedValue={storedValue} rateOfImageDiff={imageRate || 1.6} />
    </S.ImageViewWrapper>
  );
};

export default React.memo(ImageViewContent);
