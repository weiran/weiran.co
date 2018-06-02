import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Title from '../components/Title'
import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

class Index extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges.filter(item => 
      item.node.frontmatter.type !== "page")

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }, index) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3 style={{
                marginBottom: rhythm(0.25),
                fontSize: node.frontmatter.passthroughUrl ? '1.21225rem' : '1.618rem',
              }}>
                <Title title={node.frontmatter.title} passthroughUrl={node.frontmatter.passthroughUrl} slug={node.fields.slug} />
              </h3>
              <p style={{
                ...scale(-1 / 5),
                marginBottom: node.frontmatter.passthroughUrl ? rhythm(0) : rhythm(0.75),
                display: 'block',
              }}>{node.frontmatter.date}</p>
              <div style={{
                marginBottom: rhythm(2)
              }}>
                <p dangerouslySetInnerHTML={{ __html: index > 1 ? node.excerpt : node.html }} style={{
                  marginBottom: rhythm(0.5)
                }} />
                <Link to={node.fields.slug}>
                  ⌘
                </Link>
              </div>
            </div>
          )
        })}
      </div>
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
