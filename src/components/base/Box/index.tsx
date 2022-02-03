import { ReactElement } from 'react';
import { IProductItem } from '@types';
import { useCheckSameId } from '@hooks';
import { Badge } from '@components/base';
import * as S from './Style';

interface BoxProps {
  productItem: IProductItem;
  activedId?: number;
  index: number;
}

const Box = ({ productItem, activedId = 0, index }: BoxProps): ReactElement => {
  const { productId, imageUrl, discountRate } = productItem;
  const [isActive] = useCheckSameId(activedId, productId);

  return (
    <S.BoxWrapper
      className="toggle"
      isActive={isActive}
      data-swipe-index={index}
      data-id={productItem.productId}>
      <S.BoxInner imageUrl={imageUrl} />
      <Badge discountRate={discountRate} />
    </S.BoxWrapper>
  );
};

export default Box;
