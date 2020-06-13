/** @jsx jsx */
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Styled, jsx } from 'theme-ui';
import Layout from 'components/layout';
import { Container } from 'components/blocks';
import Projects from 'components/projects';

const Index = ({ data }) => {
  const { frontmatter: home } = data.homePageData.edges[0].node;
  const projects = data.projectsData.edges;

  return (
    <Layout>
      <Container>
        <Styled.h1 sx={{ variant: 'type.heading', mt: 5, mb: 5 }}>{home.heroText}</Styled.h1>
      </Container>
      <Styled.hr sx={{ width: 'container' }} />
      <Container wide>
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
            heroText
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
                fluid(maxHeight: 500, quality: 90) {
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
