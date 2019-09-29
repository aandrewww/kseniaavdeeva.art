import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head/head';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import GlobalStyle from '../../global.css';

const Layout = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Header
      title={data.site.siteMetadata.siteTitle}
      navbarData={data.navbarData}
    />
    {children}
    <Footer
      data={data.footerData}
    />
  </div>
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
    render={(data) => (
      <Layout data={data}> { children }</Layout>
    )}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
