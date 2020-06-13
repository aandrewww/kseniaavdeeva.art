import React from 'react';
import PropTypes from 'prop-types';
import { ProjectPageTemplate } from '../../templates/project-page';

const ProjectPagePreview = ({ entry, widgetFor }) => (
  <ProjectPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

ProjectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
  widgetFor: PropTypes.func.isRequired,
};

export default ProjectPagePreview;
