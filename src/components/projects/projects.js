import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/projects/item/item';
import { Container } from './projects.css';

const Projects = ({ items }) => (
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

Projects.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
