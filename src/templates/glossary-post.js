import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const GlossaryPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return <section>
      {helmet || ""}
      <div className="wrapper">
        <div className="gridPost">
          <article>
            <h1>{title}</h1>
            <PostContent content={content} />
          </article>
          <aside />
        </div>
      </div>
    </section>;
}

GlossaryPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const GlossaryPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <GlossaryPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      helmet={<Helmet title={`${post.frontmatter.title} | Glossary`} />}
    />
  )
}

GlossaryPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default GlossaryPost

export const pageQuery = graphql`
  query GlossaryPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
