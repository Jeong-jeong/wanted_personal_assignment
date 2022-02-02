import { css } from 'styled-components';

export const base = css`
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 1.42857143;
  color: ${({ theme }) => theme.colors.primary};
`;

export const fontBadge = css`
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
`;

export const fontTooltip = css`
  line-height: 1.3em;
  color: ${({ theme }) => theme.colors.secondary};
`;
