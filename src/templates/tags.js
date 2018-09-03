import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          {post.node.frontmatter.title}
        </Link>
      </li>
    ))
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <section>
        <Helmet title={`${tag} | ${title}`} />
        <div className="wrapper">
          <div className="gridPost">
            <article>
              <h3>{tagHeader}</h3>
              <ul className="taglist">{postLinks}</ul>
              <p>
                <Link
                  to="/tags/"
                  className="button-outline"
                >Browse all tags</Link>
              </p>
            </article>
          </div>
        </div>
      </section>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
