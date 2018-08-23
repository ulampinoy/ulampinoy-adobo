import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return <div className="wrapper">
        <section className="Section">
          <div className="video-preview">
            {posts.map(({ node: post }) => (
              <div className="video-preview-card" key={post.id}>
                  <Link to={post.fields.slug}>
                    <img src={post.frontmatter.coverImage} />
                  </Link>
                  <h1>
                    <Link to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h1>
                  <p>{post.frontmatter.description}</p>
              </div>
            ))}
          </div>
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
  query VideoQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "video-post" } }}
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
            description
            coverImage
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
