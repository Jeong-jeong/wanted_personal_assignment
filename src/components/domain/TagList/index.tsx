import React from 'react';
import { IProductItem, IProductList } from '@types';
import { useDispatch } from 'react-redux';
import { updateActivedId } from '@redux/actions';
import { Tag } from '@components/base';
import { TooltipContain } from '@components/domain';
import * as S from './Style';

interface ImageViewProps {
  storedValue: IProductList;
}

const TagList = ({ storedValue }: ImageViewProps) => {
  const dispatch = useDispatch();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    clickedId: number
  ) => {
    dispatch(updateActivedId(clickedId));
  };

  return (
    <S.TagWrapper>
      {React.Children.toArray(
        storedValue?.productList.map((item: IProductItem) => (
          <S.TagItem
            pointX={item.pointX}
            pointY={item.pointY}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleClick(e, item.productId)
            }>
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

export default TagList;
