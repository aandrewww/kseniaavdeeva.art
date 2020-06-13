import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import { Container } from 'components/blocks';
import Head from 'components/head';
import Content, { HTMLContent } from 'components/content';

export const AboutPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Container wide>
      <div>
        <PageContent content={content} />
      </div>
    </Container>
  );
};

AboutPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
};

AboutPageTemplate.defaultProps = {
  contentComponent: null,
};

const About = ({ data }) => {
  const {
    frontmatter: { title },
    html,
  } = data.aboutPageData.edges[0].node;

  return (
    <Layout>
      <Head pageTitle={title} />
      <AboutPageTemplate contentComponent={HTMLContent} heading={title} content={html} />
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
