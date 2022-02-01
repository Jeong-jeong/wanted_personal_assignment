import styled from 'styled-components';

export interface TagWrapperProps {
  pointX: number;
  pointY: number;
}

export const TagWrapper = styled.button<TagWrapperProps>`
  position: absolute;
  width: 40px;
  height: 40px;
  ${({ pointX }) => `left: ${pointX}px`};
  ${({ pointY }) => `top: ${pointY}px`};
`;

export const TagImage = styled.img`
  width: 32px;
  height: 32px;
`;
