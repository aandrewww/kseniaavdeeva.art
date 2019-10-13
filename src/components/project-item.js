/** @jsx jsx */
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { jsx } from 'theme-ui';
import { CustomLink } from 'components/custom-link';
import { Tag } from 'components/blocks';

const Item = ({
  title, tags, image, slug,
}) => (
  <figure>
    <CustomLink linkURL={slug}>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      <figcaption>
        <div
          sx={{
            fontSize: [1, 2, 3],
            fontWeight: 'bold',
            lineHeight: '1.4em',
          }}
        >
          {title}
        </div>
      </figcaption>
    </CustomLink>
    <div sx={{ mt: 2 }}>{ tags.map((tag) => <Tag key={tag}>{ tag }</Tag>) }</div>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.shape().isRequired,
  slug: PropTypes.string.isRequired,
};

Item.defaultProps = {
  title: '',
  tags: [],
};

export default Item;
