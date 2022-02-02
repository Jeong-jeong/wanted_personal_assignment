import styled, { css } from 'styled-components';
import { flexbox, alignBackgroundImage } from '@styles/commonStyles';
import { tooltipTop } from '@assets/imgs';
import { PositionType } from './index';

interface TooltipWrapperProps {
  position?: PositionType;
  theme: {
    [propName: string]: number | string;
  };
}

const TooltipArrowTop = css`
  top: unset;
  bottom: ${({ theme }) => `${-theme.gap.Tooltip}px`};
  transform: rotate(180deg);
`;

const TooltipTop = css`
  top: unset;
  bottom: 52px;
`;

const TooltipRight = css`
  left: -160px;
`;

const TooltipArrowRight = css`
  left: unset;
  right: 34px;
`;

export const TooltipWrapper = styled.div<TooltipWrapperProps>`
  // @NOTE: Tooltip 기본 위치: left, bottom
  ${flexbox({ flex: 'flex', ai: 'end' })};
  position: absolute;
  top: 28px;
  left: -20px;
  width: 220px;
  height: 86px;
  padding: ${({ theme }) =>
    `${theme.gap.Tooltip}px 0 ${theme.gap.Tooltip}px ${theme.gap.Tooltip}px`};
  margin-top: 16px;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: ${({ theme }) =>
    `3px 3px ${theme.gap.Tooltip}px 0 rgba(0, 0, 0, 0.2);`};
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  ${({ position }) => position?.veritcal === 'top' && TooltipTop};
  ${({ position }) => position?.horizontal === 'right' && TooltipRight};

  &::before {
    content: '';
    position: absolute;
    top: ${({ theme }) => `${-theme.gap.Tooltip}px`};
    left: 34px;
    width: 12px;
    height: ${({ theme }) => `${theme.gap.Tooltip}px`};
    background-image: url(${tooltipTop});
    ${alignBackgroundImage('cover')};
    z-index: ${({ theme }) => theme.zIndex.tooltipArrow};
    ${({ position }) => position?.veritcal === 'top' && TooltipArrowTop};
    ${({ position }) => position?.horizontal === 'right' && TooltipArrowRight};
  }
`;
