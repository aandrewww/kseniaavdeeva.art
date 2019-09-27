import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout/layout';
import Box from 'components/box/box';
import Title from 'components/title/title';
// import Projects from 'components/projects/projects';
import IOExample from 'components/io-example/io-example';
import Modal from 'containers/modal/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const { frontmatter: home } = data.homePageData.edges[0].node;

  return (
    <Layout>
      <Box>
        <Title as="h2" size="large">
          { home.heroText }
        </Title>
        <Modal>
          test modal
        </Modal>
      </Box>
      { /* <Projects
        items={data.homeJson.projects}
      /> */ }
      <div style={{ height: '50vh' }} />
      <IOExample />
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
  }
`;

// export const query = graphql`
//   query HomepageQuery {
//     homeJson {
//       title
//       content {
//         childMarkdownRemark {
//           html
//           rawMarkdownBody
//         }
//       }
//       projects {
//         title
//         copy
//         image {
//           childImageSharp {
//             fluid(maxHeight: 500, quality: 90) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `;
