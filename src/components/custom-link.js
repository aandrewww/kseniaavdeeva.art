/** @jsx jsx */
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Styled, jsx } from 'theme-ui';

export const CustomLink = ({
  linkType, linkURL, children, className,
}) => {
  if (linkType === 'internal') {
    return (
      <Styled.a
        as={Link}
        to={linkURL}
        className={className}
        activeClassName="active"
      >
        {children}
      </Styled.a>
    );
  }

  return (
    <Styled.a
      className={className}
      href={linkURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Styled.a>
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
