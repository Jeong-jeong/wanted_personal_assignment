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
  onClick: React.MouseEventHandler<HTMLElement>;
  children: ReactElement | ReactElement[] | string;
}

const Tooltip = ({
  position,
  onClick,
  children,
}: TooltipProps): ReactElement => {
  return (
    <S.TooltipWrapper position={position} onClick={onClick}>
      {children}
    </S.TooltipWrapper>
  );
};

export default Tooltip;
