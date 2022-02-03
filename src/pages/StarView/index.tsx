import React from 'react';
import { ImageViewContent, ImageViewSwiper } from '@components/domain';
import { ErrorText } from '@components/base';
import { useGetProductList } from '@hooks';
import * as S from './Style';

const StarView = () => {
  const [storedValue, isError] = useGetProductList();

  return isError ? (
    <ErrorText />
  ) : (
    <S.Center>
      <ImageViewContent storedValue={storedValue} />
      <ImageViewSwiper storedValue={storedValue} />
    </S.Center>
  );
};

export default React.memo(StarView);
