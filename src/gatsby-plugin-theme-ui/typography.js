// import "typeface-montserrat"
// import "typeface-merriweather"
import { toTheme } from '@theme-ui/typography';
import Typography from 'typography';
// import fairyGastes from 'typography-theme-fairy-gates';

// fairyGastes.baseFontSize = 16;
const typography = new Typography({
  title: 'Josefin Sans',
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Josefin Sans',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Josefin Sans', 'sans-serif'],
  bodyFontFamily: ['Josefin Sans', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,1)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 700,
});

export default typography;

export const themedTypography = toTheme(typography);
