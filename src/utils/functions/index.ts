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
    pointY > theme.imageViewSize.height / 2 ? 'top' : 'bottom';
  const horizontal: Horizontal =
    pointX > theme.imageViewSize.width / 2 ? 'right' : 'left';

  return { veritcal, horizontal };
};

export const putCommaEvery3 = (price: number): string =>
  price.toLocaleString('ko-KR');
