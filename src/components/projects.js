/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import Item from 'components/project-item';

const Projects = ({ items }) => (
  <div
    sx={{
      display: 'grid',
      gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
      gridAutoFlow: 'row',
    }}
  >
    {items.map((item) => {
      const project = item.node;

      return (
        <Item
          key={project.id}
          image={project.frontmatter.thumbnail}
          title={project.frontmatter.title}
          tags={project.frontmatter.tags}
          slug={project.fields.slug}
        />
      );
    })}
  </div>
);

Projects.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
