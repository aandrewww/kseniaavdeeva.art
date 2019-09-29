import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import Title from 'components/title/title';
import Navbar from 'components/header/navbar/navbar';
import { Container } from './header.css';

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

const Header = ({ title, navbarData }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>

      <Navbar data={navbarData} />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navbarData: PropTypes.shape(),
};

Header.defaultProps = {
  navbarData: {},
};

export default Header;
