import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://dribbble.com/ksenia-avdeeva">Dribbble</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
