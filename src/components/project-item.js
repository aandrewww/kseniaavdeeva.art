/** @jsx jsx */
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { jsx } from 'theme-ui';
// import { CustomLink } from 'components/custom-link';
// import { Tag } from 'components/blocks';

const Item = ({ title, image }) => (
  <div sx={{ px: 2, py: 2 }}>
    {/* <CustomLink linkURL={slug} sx={{ variant: 'styles.projectLink' }}> */}
    <div sx={{ variant: 'styles.projectLink' }}>
      <div sx={{ variant: 'styles.projectLinkHover' }}>
        <p sx={{ color: 'white' }}>{title}</p>
      </div>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </div>
    {/* </CustomLink> */}
  </div>
);

Item.propTypes = {
  title: PropTypes.string,
  // tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.shape().isRequired,
  // slug: PropTypes.string.isRequired,
};

Item.defaultProps = {
  title: '',
  // tags: [],
};

export default Item;
