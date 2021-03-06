import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return <div className="wrapper">
        <section className="Section indexGrid">
          {posts.map(({ node: post }) => (
            <div className="post-preview" key={post.id}>
              <div className="post-preview-blurb">
                <h4 className="whetter">{post.frontmatter.whetter}</h4>
                <h1>
                  <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <p>{post.frontmatter.description}</p>
              </div>
              <div className="post-preview-image">
                <Link to={post.fields.slug}>
                  <img src={post.frontmatter.coverImage} />
                </Link>
              </div>
            </div>
          ))}
        </section>
    </div>;
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          id
          fields {
            slug
          }
          frontmatter {
            whetter
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
            coverImage
          }
        }
      }
    }
  }
`
