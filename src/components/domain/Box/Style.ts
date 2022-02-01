import styled, { css } from 'styled-components';
import { flexbox } from '@styles/commonStyles';

export interface BoxWrapperProps {
  isActive?: boolean;
  theme: {
    [propName: string]: number | string;
  };
}

export interface BoxInnerProps {
  imageUrl?: string;
}

export const BoxWrapper = styled.div<BoxWrapperProps>`
  position: relative;
  ${flexbox({ flex: 'inline-flex' })};
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
  ${({ isActive, theme }) => {
    switch (isActive) {
      case true:
        return css`
          background: linear-gradient(
            163.54deg,
            ${theme.colors.pink} 8.22%,
            ${theme.colors.orange} 94.1%
          );
          margin: 26px 4px;
          padding: 2px;
          border-radius: 18px;
        `;
      default:
        return css``;
    }
  }}
`;

export const BoxInner = styled.div<BoxInnerProps>`
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: ${({ theme }) => `0.5px solid ${theme.colors.border}`};
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  user-select: none;
`;
