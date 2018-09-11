import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="wrapper">
        <section className="Section">
          {posts.map(({ node: post }) => (
            <div className="post-preview" key={post.id}>
              <div>
                <h1>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h1>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query GlossaryQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] },
      filter: { frontmatter: { templateKey: { eq: "glossary-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
