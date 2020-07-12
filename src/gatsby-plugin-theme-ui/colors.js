// const purple60 = '#663399';
const purple30 = '#D9BAE8';
const grey90 = '#232129';
const black80 = '#1B1F23';
const red = '#db3d3d';
const white = '#fff';
const lightWhite = 'rgba(255, 255, 255, 0.86)';
const opaqueLightWhite = 'hsla(0, 0%, 100%, 0.2)';
const lightGray = 'hsla(0, 0%, 0%, 0.2)';

export default {
  text: black80,
  background: white,
  primary: black80,
  secondary: red,
  muted: lightGray,
  heading: grey90,
  white,
  modes: {
    dark: {
      text: lightWhite,
      background: grey90,
      primary: purple30,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      heading: white,
    },
  },
};
