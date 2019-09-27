import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout/layout';
import Box from 'components/box/box';
import Head from 'components/head/head';
import Content, { HTMLContent } from 'components/content/content';

export const AboutPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Box>
      <div>
        <PageContent className="content" content={content} />
      </div>
    </Box>
  );
};

AboutPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.node,
};

AboutPageTemplate.defaultProps = {
  contentComponent: null,
};

const About = ({ data }) => {
  const { frontmatter: { title }, html } = data.aboutPageData.edges[0].node;

  return (
    <Layout>
      <Head pageTitle={title} />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        heading={title}
        content={html}
      />
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default About;

export const query = graphql`
  query AboutPageQuery {
    aboutPageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "about-page" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
