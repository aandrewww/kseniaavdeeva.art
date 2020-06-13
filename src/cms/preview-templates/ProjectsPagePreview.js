import React from 'react';
import PropTypes from 'prop-types';
import { ProjectsPageTemplate } from '../../templates/projects-page';

const ProjectsPagePreview = ({ entry, widgetFor }) => (
  <ProjectsPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

ProjectsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
  widgetFor: PropTypes.func.isRequired,
};

export default ProjectsPagePreview;
