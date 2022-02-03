import React, { ReactElement } from 'react';
import { IProductItem } from '@types';
import { useCheckSameId } from '@hooks';
import { getPositionOfTooltip, putCommaEvery3 } from '@utils/functions';
import { Tooltip, MoveIcon } from '@components/base';
import { theme } from '@styles';
import * as S from './Style';

interface TooltipContain {
  item: IProductItem;
  activedId: number;
  rateOfImageDiff: number;
}

const TooltipContain = ({
  item,
  activedId,
  rateOfImageDiff,
}: TooltipContain): ReactElement => {
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
          position={getPositionOfTooltip(
            // @NOTE: pointX, poinY 반대로 넣어줘야 함
            pointY * rateOfImageDiff + theme.gap.image,
            pointX * rateOfImageDiff
          )}
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
