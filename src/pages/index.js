import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Title from '../components/Title'
import Bio from '../components/Bio'
import typography from '../utils/typography'
const rhythm = typography.rhythm
const scale = typography.scale

class Index extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges.filter(item => 
      item.node.frontmatter.type !== "page")

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <Bio />
          <hr style={{
            marginTop: rhythm(2),
            marginBottom: rhythm(2)
          }} />
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h2 style={{
                  marginBottom: rhythm(0.25),
                  fontSize: node.frontmatter.passthroughUrl ? '1.21225rem' : '1.618rem',
                }}>
                  <Title title={title} passthroughUrl={node.frontmatter.passthroughUrl} slug={node.fields.slug} />
                </h2>
                <p className="post-meta" style={{
                  ...scale(-1 / 5),
                  marginBottom: node.frontmatter.passthroughUrl ? rhythm(0) : rhythm(0.75),
                  display: 'block',
                }}>{node.frontmatter.date}</p>
                <div style={{
                  marginBottom: rhythm(2)
                }}>
                  <div dangerouslySetInnerHTML={{ __html: index > 1 ? node.excerpt : node.html }} style={{
                    marginBottom: rhythm(0.5)
                  }} />
                  <p>
                    <Link to={node.fields.slug}>
                      ⌘
                    </Link>
                  </p>
                  <hr style={{
                    marginTop: rhythm(2)
                  }} />
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            type
            passthroughUrl
          }
        }
      }
    }
  }
`
