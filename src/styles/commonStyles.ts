import { css } from 'styled-components';

type flexkey = 'start' | 'end' | 'between' | 'around' | 'stretch' | 'center';

interface flexBoxProps {
  flex?: string;
  fd?: string;
  jc?: flexkey;
  ai?: flexkey;
}

const getFlexValue = (key: flexkey): string => {
  const flexmap = {
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    stretch: 'stretch',
    center: 'center',
  };

  return flexmap[key];
};

export const flexbox = ({
  flex = 'flex',
  fd = 'row',
  jc = 'center',
  ai = 'center',
}: flexBoxProps) => {
  return css`
    display: ${flex};
    flex-direction: ${fd};
    justify-content: ${getFlexValue(jc)};
    align-items: ${getFlexValue(ai)};
  `;
};

export const alignBackgroundImage = (size: string) => css`
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${size};
`;
