import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  coverImage,
  whetter,
  sideNote,
  sideImage,
  date,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ""}
      <div className="wrapper">
        <div className="billboard">
          <div
            className="billboard-image"
            style={{ backgroundImage: `url(${coverImage})` }}
          />
        </div>
        <div className="gridPost">
          <article>
            <h4 className="whetter">{whetter}</h4>
            <h1>{title}</h1>
            <p className="article-desc">{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div className="tags">
                <div className="liner" />
                <ul className="tags-list">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <h5>{date}</h5>
          </article>
          <aside>
            <div className="aside-wrapper">
              <div className="liner" />
              <h4>Alam mo ba?</h4>
              <div className="side-note">
                <p>{sideNote}</p>
                <img src={sideImage} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  coverImage: PropTypes.string,
  whetter: PropTypes.string,
  sideNote: PropTypes.func,
  sideImage: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      coverImage={post.frontmatter.coverImage}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      whetter={post.frontmatter.whetter}
      sideNote={post.frontmatter.sideNote}
      sideImage={post.frontmatter.sideImage}
      date={post.frontmatter.date}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        whetter
        tags
        coverImage
        sideNote
        sideImage
      }
    }
  }
`;
