import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({
  title,
  description,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="wrapper">
      <section>
        <div className="gridPost">
          <article>
            <h1>{title}</h1>
            <p className="article-desc">{description}</p>
            <PageContent content={content} />
            <div className="liner" />
          </article>
        </div>
      </section>
      <section className="Section">
        <h2>Makipag-ugnayan sa Amin</h2>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact-form">
            <div>
              <label>Pangalan:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Email: </label>
              <input type="email" name="email" />
            </div>
            <div>
              <label>Mensahe:</label>
              <textarea name="message" rows="9" />
            </div>
            <div>
              <button type="submit">I-send</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      content={post.html}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
