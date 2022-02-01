import styled from 'styled-components';
import { badge } from '@assets/imgs';
import { fontBadge } from '@styles/fonts';
import { alignBackgroundImage } from '@styles/commonStyles';

export const BadgeWrapper = styled.div``;

export const BadgeInner = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  width: 24px;
  height: 28px;
  text-align: center;
  color: white;
  background-image: url(${badge});
  ${alignBackgroundImage};
  ${fontBadge};
`;

export const Percentage = styled.span`
  font-size: 8px;
`;
