const colors = {
  primary: '#333',
  secondary: '#333c45',
  bold: '#181d1f',
  border: '#aaafb9',
  gray: '#898f94',
  pink: '#ff659e',
  orange: '#f56b30',
};

const fonts = {
  base: '14px',
};

const theme = {
  colors,
  fonts,
};

export type Theme = typeof theme;
export default theme;
