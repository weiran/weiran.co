import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Nav from '../components/Nav'
import Title from '../components/Title'
import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class Index extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges.filter(item => 
      item.node.frontmatter.type !== "page")

    return (
      <div>
        <Nav />
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3 style={{
                marginBottom: 0
              }}>
                <Title title={node.frontmatter.title} passthroughUrl={node.frontmatter.passthroughUrl} slug={node.fields.slug} />
              </h3>
              <small>{node.frontmatter.date}</small>
              <div style={{
                marginBottom: rhythm(2)
              }}>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} style={{
                  marginBottom: rhythm(0)
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
