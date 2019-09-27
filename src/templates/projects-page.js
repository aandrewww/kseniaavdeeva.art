import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout/layout';
import Box from 'components/box/box';
import Head from 'components/head/head';
import Content, { HTMLContent } from 'components/content/content';

export const ProjectsPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Box>
      <div>
        <PageContent className="content" content={content} />
      </div>
    </Box>
  );
};

ProjectsPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.node,
};

ProjectsPageTemplate.defaultProps = {
  contentComponent: null,
};

const Projects = ({ data }) => {
  const { frontmatter: { title }, html } = data.projectsPageData.edges[0].node;

  return (
    <Layout>
      <Head pageTitle={title} />
      <ProjectsPageTemplate
        contentComponent={HTMLContent}
        heading={title}
        content={html}
      />
    </Layout>
  );
};

Projects.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Projects;

export const query = graphql`
  query ProjectsPageQuery {
    projectsPageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "projects-page" } } }) {
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
