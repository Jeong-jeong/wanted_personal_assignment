import { ReactElement } from 'react';
import * as S from './Style';

export type Vertical = 'top' | 'bottom';
export type Horizontal = 'left' | 'right';

export type ReturnType = Vertical | Horizontal;

export interface PositionType {
  veritcal?: Vertical;
  horizontal?: Horizontal;
}

export interface TooltipProps {
  position?: PositionType;
  children: ReactElement | ReactElement[] | string;
}

const Tooltip = ({ position, children }: TooltipProps): ReactElement => {
  return <S.TooltipWrapper position={position}>{children}</S.TooltipWrapper>;
};

export default Tooltip;
