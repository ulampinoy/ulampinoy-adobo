import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import { Url } from 'url';

export const VideoPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  coverImage,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return <section>
    {helmet || ""}
    <div className="wrapper">
      <div className="billboard">
        <div className="billboard-image" style={{ backgroundImage: `url(${coverImage})` }}>
        </div>
      </div>
      <div className="gridPost">
        <article>
          <h1>{title}</h1>
          <p className="article-desc">{description}</p>
          <PostContent content={content} />
          {tags && tags.length ?
            <div className="tags">
              <div className="liner" />
              <ul className="tags-list">
                {tags.map(tag => <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>)}
              </ul>
            </div> : null}
        </article>
        <aside>
          <div className="liner" />
          <h3>Top Stories</h3>
        </aside>
      </div>
    </div>
  </section>;
}

VideoPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const VideoPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <VideoPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      coverImage={post.frontmatter.coverImage}
      helmet={<Helmet title={`${post.frontmatter.title} | Videos`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

VideoPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default VideoPost

export const pageQuery = graphql`
  query VideoPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        coverImage
        tags
      }
    }
  }
`
