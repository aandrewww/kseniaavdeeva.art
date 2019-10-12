/** @jsx jsx */
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import {
  jsx,
  Styled,
  Layout as LayoutUI,
  Main,
} from 'theme-ui';
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
    <LayoutUI>
      <Head />
      <Header
        title={data.site.siteMetadata.siteTitle}
        navbarData={data.navbarData}
      />
      <Main>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            my: 4,
          }}
        >
          {children}
        </div>
      </Main>
      <Footer
        data={data.footerData}
      />
    </LayoutUI>
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
    render={(data) => (
      <Layout data={data}> { children }</Layout>
    )}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
