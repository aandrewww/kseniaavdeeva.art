/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

export const Banner = (props) => (
  <div
    sx={{
      py: [4, 5, 6],
      fontWeight: 'bold',
      h1: {
        fontSize: [5, 6, 7],
      },
      p: {
      },
      ul: {
        listStyle: 'none',
        display: 'flex',
        p: 0,
        m: 0,
      },
      li: {
        mr: 3,
      },
      a: {
        variant: 'styles.navlink',
      },
    }}
  >
    { props.children }
  </div>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Container = ({ wide, ...props }) => (
  <div
    sx={{
      maxWidth: wide ? 'wide' : 'container',
    }}
  >
    { props.children }
  </div>
);

Container.propTypes = {
  wide: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  wide: false,
};

export const List = (props) => (
  <div
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: 4,
      },
      a: {
        variant: 'styles.navlink',
        fontWeight: 'bold',
      },
      ...props.sx,
    }}
  >
    { props.children }
  </div>
);

List.propTypes = {
  sx: PropTypes.shape(),
  children: PropTypes.node.isRequired,
};

List.defaultProps = {
  sx: {},
};

export const Tag = ({ ...props }) => (
  <span
    sx={{
      variant: 'type.small',
      bg: 'primary',
      mr: 1,
      px: 1,
      py: 1,
      fontSize: 0,
      borderRadius: 5,
    }}
  >
    { props.children }
  </span>
);

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};
