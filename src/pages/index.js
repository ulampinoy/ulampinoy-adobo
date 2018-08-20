import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return <div className="wrapper">
        <section className="Section">
          {posts.map(({ node: post }) => (
            <div className="post-preview" key={post.id}>
              <div>
                <h1>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h1>
                <p>{post.frontmatter.description}</p>
              </div>
              <div>
                <img src={post.frontmatter.coverImage} />
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
          excerpt(pruneLength: 400)
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
