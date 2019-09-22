import React from 'react';
import PropTypes from 'prop-types';
import { BookshelfPageTemplate } from '../../pages/bookshelf';

const BookshelfPagePreview = ({ entry, widgetFor }) => (
  <BookshelfPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

BookshelfPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BookshelfPagePreview;
