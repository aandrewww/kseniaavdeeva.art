/** @jsx jsx */
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from 'components/layout';
import { Container } from 'components/blocks';
import Head from 'components/head';
import Content, { HTMLContent } from 'components/content';

export const ProjectsPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  console.log(PageContent);

  return (
    <Container wide>
      <div sx={{ width: 'wide' }}>
        <PageContent content={content} />
      </div>
    </Container>
  );
};

ProjectsPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
};

ProjectsPageTemplate.defaultProps = {
  contentComponent: null,
};

const Projects = ({ data }) => {
  const {
    frontmatter: { title },
    html,
  } = data.projectsPageData.edges[0].node;

  return (
    <Layout>
      <Head pageTitle={title} />
      <ProjectsPageTemplate contentComponent={HTMLContent} heading={title} content={html} />
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
