import styled from 'styled-components';

export const TagWrapper = styled.ul``;
export interface TagItemProps {
  pointX: number;
  pointY: number;
}

export const TagItem = styled.button<TagItemProps>`
  position: absolute;
  width: 40px;
  height: 40px;
  ${({ pointX }) => `left: ${pointX}px`};
  ${({ pointY }) => `top: ${pointY}px`};
`;
