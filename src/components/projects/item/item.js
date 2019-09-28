import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({
  title, tags, image, slug,
}) => (
  <Link to={slug}>
    <figure>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      <figcaption>
        <Title>{title}</Title>
        <Copy>{tags}</Copy>
      </figcaption>
    </figure>
  </Link>
);

Item.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.string,
  image: PropTypes.shape().isRequired,
  slug: PropTypes.string.isRequired,
};

Item.defaultProps = {
  title: '',
  tags: '',
};

export default Item;
