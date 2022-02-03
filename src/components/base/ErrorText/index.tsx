import { ReactElement } from 'react';
import * as S from './Style';

const ErrorText = (): ReactElement => (
  <S.ErrorTextWrapper>
    에러가 발생했습니다. 잠시 후 다시 시도해주세요
  </S.ErrorTextWrapper>
);

export default ErrorText;
