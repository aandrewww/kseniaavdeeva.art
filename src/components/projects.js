/** @jsx jsx */
import PropTypes from 'prop-types';
import Item from 'components/project-item';
import { jsx } from 'theme-ui';

const Projects = ({ items }) => (
  <div
    sx={{
      display: 'grid',
      gridTemplateColumns: [
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ],
      gridAutoFlow: 'row',
      px: 2,
      py: 4,
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
