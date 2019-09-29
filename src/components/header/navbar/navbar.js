import React from 'react';
import PropTypes from 'prop-types';
import { CustomLink } from '../../custom-link/custom-link';
import { Container } from './navbar.css';

export const NavbarTemplate = ({ data }) => (
  <nav className="navbar">
    <Container>
      {data.navbarItems.length > 0 && (
        <ul className="navbar-menu">
          {data.navbarItems.map((menuItem) => (
            <li key={menuItem.linkURL} className="navbar-menuItem">
              <CustomLink
                linkType={menuItem.linkType}
                linkURL={menuItem.linkURL}
                className="navbar-menuLink"
              >
                {menuItem.label}
              </CustomLink>
            </li>
          ))}
        </ul>
      )}
    </Container>
  </nav>
);

NavbarTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
};

const Navbar = (props) => {
  if (!props.data) {
    return null;
  }

  const data = props.data.edges[0].node.frontmatter;

  return <NavbarTemplate data={data} />;
};

Navbar.propTypes = {
  data: PropTypes.shape(),
};

Navbar.defaultProps = {
  data: null,
};

export default Navbar;
