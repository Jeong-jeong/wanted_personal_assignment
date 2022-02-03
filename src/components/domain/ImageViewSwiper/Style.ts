import styled from 'styled-components';

interface SwiperListProps {
  isTransition: boolean;
}

export const SwiperListWrapper = styled.div`
  width: ${({ theme }) => `${theme.size.imageViewWidth}px`};
  padding: ${({ theme }) => `0 ${theme.gap.swiper}px`};
  height: 200px;
  overflow-x: auto;
  overflow-y: hidden;
  touch-action: pan-y;
`;

export const SwiperList = styled.div<SwiperListProps>`
  transition-duration: ${({ isTransition }) =>
    isTransition ? '300ms' : '0ms'};
  display: flex;
`;
