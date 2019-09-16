import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item/item';
import { Container } from './gallery.css';

const Gallery = ({ items }) => (
  <Container>
    {items.map((item) => (
      <Item
        key={`${item.title.substring(0, 10)}`}
        image={item.image}
        title={item.title}
        copy={item.copy}
      />
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
