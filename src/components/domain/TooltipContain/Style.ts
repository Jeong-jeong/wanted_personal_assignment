import styled from 'styled-components';
import { fontTooltip } from '@styles/fonts';
import { alignBackgroundImage, ellipsis, flexbox } from '@styles/commonStyles';

interface ImageProps {
  imageUrl: string;
}

export const TooltipInner = styled.div``;

export const TooltipName = styled.strong`
  text-align: left;
  ${fontTooltip};
  ${ellipsis(2)};
`;

export const Image = styled.div<ImageProps>`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: ${({ theme }) => `${theme.gap.Tooltip}px`};
  border-radius: 4px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  ${alignBackgroundImage('cover')};
`;

export const TooltipInfos = styled.div`
  ${flexbox({ flex: 'flex', fd: 'column', ai: 'start', jc: 'between' })};
  height: 100%;
  line-height: 1.2em;
`;

export const PriceInfos = styled.div`
  span.expectedPrice {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 11px;
    font-weight: bold;
    margin-right: ${({ theme }) => `${theme.gap.Tooltip / 2}px`};
  }

  span.discountedPrice {
    color: ${({ theme }) => theme.colors.pink};
    margin-right: ${({ theme }) => `${theme.gap.Tooltip / 2}px`};
  }
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.bold};
  font-size: 16px;
  font-weight: bold;
`;
