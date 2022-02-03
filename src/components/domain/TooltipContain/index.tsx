import React from 'react';
import { IProductItem } from '@types';
import { useCheckSameId } from '@hooks';
import { getPositionOfTooltip, putCommaEvery3 } from '@utils/functions';
import { Tooltip, MoveIcon } from '@components/base';
import * as S from './Style';

interface TooltipContain {
  item: IProductItem;
  activedId: number;
}

const TooltipContain = ({ item, activedId }: TooltipContain) => {
  const {
    productId,
    productName,
    imageUrl,
    pointX,
    pointY,
    discountRate,
    priceDiscount,
    outside,
  } = item;
  const [isActive] = useCheckSameId(activedId, productId);
  const moveToPage = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('페이지 이동');
  };

  return (
    <>
      {isActive && (
        <Tooltip
          position={getPositionOfTooltip(pointX, pointY)}
          onClick={moveToPage}>
          <S.Image imageUrl={imageUrl} aria-label={productName} />
          <S.TooltipInfos>
            <S.TooltipName>{productName}</S.TooltipName>
            <S.PriceInfos>
              {outside ? (
                <span className="expectedPrice">예상가</span>
              ) : (
                <span className="discountedPrice">{discountRate}%</span>
              )}

              <S.Price>{putCommaEvery3(priceDiscount)}</S.Price>
            </S.PriceInfos>
          </S.TooltipInfos>
          <MoveIcon />
        </Tooltip>
      )}
    </>
  );
};

export default React.memo(TooltipContain);
