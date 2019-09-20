import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout/layout';
import Box from 'components/box/box';
import Head from 'components/head/head';
import Content, { HTMLContent } from 'components/content/content';

export const BookshelfPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Box>
      <div>
        <PageContent className="content" content={content} />
      </div>
    </Box>
  );
};

BookshelfPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.node,
};

BookshelfPageTemplate.defaultProps = {
  contentComponent: null,
};

const Bookshelf = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <Head pageTitle={frontmatter.title} />
      <BookshelfPageTemplate
        contentComponent={HTMLContent}
        heading={frontmatter.title}
        content={html}
      />
    </Layout>
  );
};

Bookshelf.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Bookshelf;

export const query = graphql`
  query BookshelfPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
