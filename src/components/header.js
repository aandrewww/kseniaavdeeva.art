/** @jsx jsx */
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { jsx, css, useColorMode } from 'theme-ui';

import Switch from 'components/switch';
import Navbar from 'components/navbar';
import sun from 'src/images/sun.png';
import moon from 'src/images/moon.png';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

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
    <AnimatedContainer>
      <header
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          maxWidth: 'wide',
          mx: 'auto',
          px: 3,
          py: 3,
        }}
      >
        <Link
          to="/"
          sx={{
            variant: 'styles.navlink',
            fontSize: 5,
            py: 2,
          }}
        >
          <span>KS/AVDEEVA</span>
        </Link>

        <div sx={{ mx: 'auto' }} />

        <Navbar data={navbarData} />

        <Switch
          aria-label="Toggle dark mode"
          css={css({
            bg: 'black',
          })}
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          checked={isDark}
          /* eslint-disable-next-line react/jsx-no-bind */
          onChange={toggleColorMode}
        />
      </header>
    </AnimatedContainer>
  );
};

Header.propTypes = {
  navbarData: PropTypes.shape(),
};

Header.defaultProps = {
  navbarData: {},
};

export default Header;
