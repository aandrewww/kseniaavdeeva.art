/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { CustomLink } from 'components/custom-link';
import Dribble from '../images/dribbble.svg';
import Instagram from '../images/instagram.svg';
import Email from '../images/email.svg';
import Behance from '../images/behance.svg';
import Linkedin from '../images/linkedin.svg';

const FOOTER_ICONS = {
  email: <Email />,
  instagram: <Instagram />,
  linkedin: <Linkedin />,
  dribbble: <Dribble />,
  behance: <Behance />,
};

export const FooterTemplate = ({ data }) => (
  <footer>
    {data.socialItems.length > 0 && (
      <div
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          py: 3,
        }}
      >
        {data.socialItems.map((menuItem) => (
          <div
            key={menuItem.label}
            sx={{
              variant: 'styles.footeritem',
            }}
          >
            <CustomLink linkType="external" linkURL={menuItem.link}>
              {FOOTER_ICONS[menuItem.type]}
            </CustomLink>
          </div>
        ))}
      </div>
    )}
  </footer>
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
