import React, { ReactElement } from 'react';
import { IProductItem } from '@types';
import { Badge } from '@components/base';
import * as S from './Style';

interface BoxProps {
  productItem: IProductItem;
  isActive?: boolean;
}

const Box = ({ productItem, isActive = false }: BoxProps): ReactElement => {
  const { productId, imageUrl, discountRate } = productItem;
  return (
    <S.BoxWrapper isActive={isActive} data-id={productId}>
      <S.BoxInner imageUrl={imageUrl} />
      <Badge discountRate={discountRate} />
    </S.BoxWrapper>
  );
};

export default Box;
