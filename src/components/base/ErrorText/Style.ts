import styled from 'styled-components';
import { alignMiddle } from '@styles/commonStyles';

export const ErrorTextWrapper = styled.p`
  ${alignMiddle};
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.pink};
`;
