import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import Bio from '../components/Bio'
import BlogList from '../templates/blog-list-template'

import typography from '../utils/typography'
const rhythm = typography.rhythm

class Index extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges.filter(item => 
      item.node.frontmatter.type !== 'page')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <Bio />
          <hr style={{
            marginTop: rhythm(2),
            marginBottom: rhythm(2)
          }} />
          <BlogList posts={posts} />
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
