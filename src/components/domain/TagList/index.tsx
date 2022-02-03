import React, { ReactElement } from 'react';
import { IProductItem, IProductListProps } from '@types';
import { useClickAway } from '@hooks';
import { Tag } from '@components/base';
import { TooltipContain } from '@components/domain';
import { theme } from '@styles';
import * as S from './Style';

interface TagLIstProps extends IProductListProps {
  rateOfImageDiff: number;
}

const TagList = ({
  storedValue,
  rateOfImageDiff,
}: TagLIstProps): ReactElement => {
  useClickAway();

  return (
    <S.TagWrapper>
      {React.Children.toArray(
        storedValue?.productList?.map((item: IProductItem, index) => (
          // @NOTE: pointX, poinY 반대로 넣어줘야 함
          <S.TagItem
            className="toggle"
            data-id={item.productId}
            data-swipe-index={index}
            pointX={item.pointY * rateOfImageDiff + theme.gap.image}
            pointY={item.pointX * rateOfImageDiff}>
            <Tag
              activedId={storedValue?.activedId}
              productId={item.productId}
            />
            <TooltipContain
              item={item}
              activedId={storedValue?.activedId}
              rateOfImageDiff={rateOfImageDiff}
            />
          </S.TagItem>
        ))
      )}
    </S.TagWrapper>
  );
};

export default React.memo(TagList);
