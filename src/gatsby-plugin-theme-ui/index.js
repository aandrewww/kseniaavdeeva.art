import merge from 'deepmerge';
import { themedTypography } from './typography';
import colors from './colors';
import styles from './styles';

export default merge(themedTypography, {
  initialColorMode: 'light',
  colors,
  sizes: {
    container: 1500,
  },
  fonts: {
    body: 'Josefin Sans, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  breakpoints: ['768px', '1025px', '1290px'],
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  type: {
    heading: {
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: 1,
      mb: 1,
    },
    small: {
      fontWeight: 'bold',
      fontSize: 0,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  styles,
  // prism,
});
