import merge from 'deepmerge';
import typography from './typography';
import colors from './colors';
import styles from './styles';
// import prism from './prism'

export default merge(typography, {
  initialColorMode: 'light',
  colors,
  sizes: {
    container: 768,
    wide: 1280,
  },
  fonts: {
    body: 'Montserrat, sans-serif',
    monospace: 'Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace',
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
  breakpoints: ['40em', '56em', '64em'],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72, 96],
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
