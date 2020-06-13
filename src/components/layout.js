/** @jsx jsx */
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { jsx, Styled } from 'theme-ui';
import { Global } from '@emotion/core';
import Head from 'components/head';
import Header from 'components/header';
import Footer from 'components/footer';

const Layout = ({ data, children }) => (
  <Styled.root>
    <Global
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          margin: 0,
        },
      }}
    />
    <div>
      <Head />
      <Header title={data.site.siteMetadata.siteTitle} navbarData={data.navbarData} />
      <main>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      </main>
      <Footer data={data.footerData} />
    </div>
  </Styled.root>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape().isRequired,
};

const LayoutWithQuery = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
        navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
          edges {
            node {
              id
              frontmatter {
                navbarItems {
                  label
                  linkType
                  linkURL
                }
              }
            }
          }
        }
        footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
          edges {
            node {
              id
              frontmatter {
                socialItems {
                  label
                  type
                  link
                }
              }
            }
          }
        }
      }
    `}
    /* eslint-disable react/jsx-no-bind */
    render={(data) => <Layout data={data}> {children}</Layout>}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
