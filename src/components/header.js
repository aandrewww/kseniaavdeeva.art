/** @jsx jsx */
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { jsx, css, useColorMode } from 'theme-ui';

import Switch from 'components/switch';
import Navbar from 'components/navbar';
import sun from 'src/images/sun.png';
import moon from 'src/images/moon.png';

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: 'none',
      margin: 4,
    }}
  />
);

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: 'none',
      margin: 4,
    }}
  />
);

const Header = ({ navbarData }) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  const toggleColorMode = () => {
    setColorMode(isDark ? 'light' : 'dark');
  };

  return (
    <header
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 'container',
        flexDirection: ['column', 'row'],
        mx: 'auto',
        px: 3,
        py: 3,
      }}
    >
      <Link
        to="/"
        sx={{
          variant: 'styles.navlink',
          fontSize: [3, 4, 5],
          py: 2,
        }}
      >
        <span>KS/AVDEEVA</span>
      </Link>

      <div sx={{ mx: 'auto' }} />

      <Navbar data={navbarData} />

      <div sx={{ display: 'flex', mt: [3, 0], ml: [0, 3] }}>
        <Switch
          aria-label="Toggle dark mode"
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          checked={isDark}
          onChange={toggleColorMode}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  navbarData: PropTypes.shape(),
};

Header.defaultProps = {
  navbarData: {},
};

export default Header;
