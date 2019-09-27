import React from 'react';
import PropTypes from 'prop-types';
import { ProjectPageTemplate } from '../../templates/project';

const ProjectPagePreview = ({ entry, widgetFor }) => (
  <ProjectPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ProjectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProjectPagePreview;
