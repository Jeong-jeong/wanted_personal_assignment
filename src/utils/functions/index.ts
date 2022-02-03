import { Vertical, Horizontal } from '@components/base/Tooltip';
import { theme } from '@styles';

export const getStorageValue = <T>(key: string, initialState: T) => {
  const getStorageValue = window.localStorage.getItem(key);
  return getStorageValue ? JSON.parse(getStorageValue) : initialState;
};

export const checkSameId = (
  id1: number | undefined,
  id2: number | undefined
): boolean => id1 === id2;

export const getPositionOfTooltip = (pointX: number, pointY: number) => {
  // @NOTE: 기본값이 left, bottom
  // @NOTE: 기준값인 width(height)의 절반보다 point 값이 클 경우 top 혹은 left로 변화
  const veritcal: Vertical =
    pointY > theme.size.imageViewHeight / 2 ? 'top' : 'bottom';
  const horizontal: Horizontal =
    pointX > theme.size.imageViewWidth / 2 ? 'right' : 'left';

  return { veritcal, horizontal };
};

export const putCommaEvery3 = (price: number): string =>
  price.toLocaleString('ko-KR');

const roundOfNumToONe = (num: number) =>
  Number(Math.round(Number(num + 'e+1')) + 'e-1');

export const getDiffOfImageRate = (
  target: React.RefObject<HTMLImageElement>
) => {
  const originImageSize = {
    width: target?.current?.naturalWidth || 0,
    height: target?.current?.naturalHeight || 0,
  };

  const renderedImageSize = {
    width: target?.current?.clientWidth || 0,
    height: target?.current?.clientHeight || 0,
  };

  const differenceOfRate = {
    width: roundOfNumToONe(renderedImageSize.width / originImageSize.width),
    height: roundOfNumToONe(renderedImageSize.height / originImageSize.height),
  };

  return differenceOfRate.width + differenceOfRate.height;
};
