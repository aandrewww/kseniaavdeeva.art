/** @jsx jsx */
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from 'components/layout';
import { Container } from 'components/blocks';
import Projects from 'components/projects';

const Index = ({ data }) => {
  const projects = data.projectsData.edges;

  return (
    <Layout>
      <Container>
        <Projects items={projects} />
      </Container>
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Index;

export const query = graphql`
  query HomePageQuery {
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
    projectsData: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            tags
            date(formatString: "MMMM DD, YYYY")
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 621, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
