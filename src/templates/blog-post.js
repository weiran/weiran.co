import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Title from '../components/Title'
import Bio from '../components/Bio'
import Layout from '../components/layout'
import typography from '../utils/typography'
const rhythm = typography.rhythm
const scale = typography.scale

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext

    return (
      <Layout location="this.props.location">
        <div>
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <h1>
            <Title title={post.frontmatter.title} passthroughUrl={post.frontmatter.passthroughUrl} slug={post.slug} />
          </h1>
          <p className="post-meta"
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <p>
            <Link to={post.link}>
              ⌘
            </Link>
          </p>
          <hr
            style={{
              margin: rhythm(1) + " 0",
            }}
          />
          <Bio />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
              marginLeft: 0
            }}
          >
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        passthroughUrl
      }
    }
  }
`
