import React from 'react';
import PropTypes from 'prop-types';
import { CustomLink } from '../custom-link/custom-link';
import { Container } from './footer.css';

export const FooterTemplate = ({ data }) => (
  <nav className="footer">
    <Container>
      {data.socialItems.length > 0 && (
        <ul className="footer-menu">
          {data.socialItems.map((menuItem) => (
            <li key={menuItem.link} className="footer-menuItem">
              <CustomLink
                linkType="external"
                linkURL={menuItem.link}
                className="footer-menuLink"
              >
                {menuItem.type}|{menuItem.label}
              </CustomLink>
            </li>
          ))}
        </ul>
      )}
    </Container>
  </nav>
);

FooterTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
};

const Footer = (props) => {
  if (!props.data) {
    return null;
  }

  const data = props.data.edges[0].node.frontmatter;

  return <FooterTemplate data={data} />;
};

Footer.propTypes = {
  data: PropTypes.shape(),
};

Footer.defaultProps = {
  data: null,
};

export default Footer;
