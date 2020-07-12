import React from 'react';
import PropTypes from 'prop-types';
import { BaseStyles } from 'theme-ui';

export const HTMLContent = ({ content, className }) => (
  <BaseStyles>
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  </BaseStyles>
);

const Content = ({ content, className }) => <div className={className}>{content}</div>;

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

Content.defaultProps = {
  content: {},
  className: '',
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
