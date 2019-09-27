import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout/layout';
import Box from 'components/box/box';
import Head from 'components/head/head';
import Content, { HTMLContent } from 'components/content/content';

export const ProjectPageTemplate = ({
  content, contentComponent, description, title, /* tags */
}) => {
  const PageContent = contentComponent || Content;

  return (
    <Box>
      <div className="page post container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title">{title}</h1>
            <span className="date">
              <time dateTime="13-11-2018">Tuesday. November 13, 2018</time> -{' '}
              <span className="reading-time" title="Estimated read time">
                2 mins
              </span>
            </span>
            <p>{description}</p>
            <PageContent className="content" content={content} />
            {/* tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4 style={{ 'text-align': 'center' }}>Tags</h4>
                <ul className="post-tags">
                  {tags.map(tag => (
                    <li className="item" key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
                  ) : null */}
          </div>
        </div>
      </div>
    </Box>
  );
};

ProjectPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
};

ProjectPageTemplate.defaultProps = {
  contentComponent: null,
  description: '',
  title: '',
};

const Project = ({ data }) => {
  const { markdownRemark: project } = data;

  return (
    <Layout>
      <Head pageTitle={project.frontmatter.title} />
      <ProjectPageTemplate
        content={project.html}
        contentComponent={HTMLContent}
        description={project.frontmatter.description}
        tags={project.frontmatter.tags}
        title={project.frontmatter.title}
      />
    </Layout>
  );
};

Project.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Project;

export const query = graphql`
  query ProjectByID($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
