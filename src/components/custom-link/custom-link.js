import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const CustomLink = ({
  linkType, linkURL, children, className,
}) => {
  if (linkType === 'internal') {
    return (
      <Link className={className} to={linkURL}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={linkURL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

CustomLink.propTypes = {
  linkType: PropTypes.string,
  linkURL: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CustomLink.defaultProps = {
  linkType: 'internal',
  linkURL: '/',
  className: '',
};

export default CustomLink;
