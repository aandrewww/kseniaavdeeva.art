import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head/head';
import Header from 'components/header/header';
import GlobalStyle from '../../global.css';

const Layout = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    {children}
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
