import styled from 'styled-components';

export const ImageViewWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: ${({ theme }) => `${theme.size.imageViewWidth}px`};
`;
