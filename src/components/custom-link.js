/** @jsx jsx */
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Styled, jsx } from 'theme-ui';

// it's needed because gatsby-remark-relative-images plugin adding dots before slash
// https://github.com/danielmahon/gatsby-remark-relative-images/blob/master/src/index.js#L112
const normalizeInternalLink = (link) => {
  let internalLink = link;

  while (internalLink.substring(0, 3) === '../') {
    internalLink = internalLink.substring(3);
  }

  return internalLink[0] !== '/' ? `/${internalLink}` : internalLink;
};

export const CustomLink = ({
  linkType, linkURL, children, className,
}) => {
  if (linkType === 'internal') {
    return (
      <Styled.a
        as={Link}
        to={normalizeInternalLink(linkURL)}
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
