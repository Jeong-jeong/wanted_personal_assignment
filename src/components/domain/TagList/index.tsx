import React from 'react';
import { IProductItem, IProductListProps } from '@types';
import { useClickAway } from '@hooks';
import { Tag } from '@components/base';
import { TooltipContain } from '@components/domain';
import * as S from './Style';

const TagList = ({ storedValue }: IProductListProps) => {
  useClickAway();

  return (
    <S.TagWrapper>
      {React.Children.toArray(
        storedValue?.productList.map((item: IProductItem) => (
          <S.TagItem
            className="toggle"
            data-id={item.productId}
            pointX={item.pointX}
            pointY={item.pointY}>
            <Tag
              activedId={storedValue?.activedId}
              productId={item.productId}
            />
            <TooltipContain item={item} activedId={storedValue?.activedId} />
          </S.TagItem>
        ))
      )}
    </S.TagWrapper>
  );
};

export default React.memo(TagList);
