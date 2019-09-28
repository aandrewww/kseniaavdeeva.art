import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/projects/item/item';
import { Container } from './projects.css';

const Projects = ({ items }) => (
  <Container>
    {items.map((item) => {
      const project = item.node;

      return (
        <Item
          key={project.id}
          image={project.frontmatter.thumbnail}
          title={project.frontmatter.title}
          tags={project.frontmatter.tags.join(', ')}
          slug={project.fields.slug}
        />
      );
    })}
  </Container>
);

Projects.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
