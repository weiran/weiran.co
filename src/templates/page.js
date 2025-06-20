import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Bio from '../components/Bio'
import typography from '../utils/typography'
import Layout from '../components/layout'
const rhythm = typography.rhythm

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location='this.props.location'>
        <div>
          <Helmet title={`${page.frontmatter.title} — ${siteTitle}`} />
          <h1>{page.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />

          <hr
            style={{
              margin: rhythm(2) + ' auto',
            }}
          />
          <Bio />
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
      }
    }
  }
`
