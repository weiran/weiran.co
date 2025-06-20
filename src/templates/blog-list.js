import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Title from '../components/Title'
import Layout from '../components/layout'
import Bio from '../components/Bio'

import typography from '../utils/typography'
const rhythm = typography.rhythm
const scale = typography.scale

export default class BlogList extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges.filter(item => 
      item.node.frontmatter.type !== 'page')
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${(currentPage - 1)}`
    const nextPage = `/blog/${(currentPage + 1)}`

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
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
                <p className='post-meta' style={{
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
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
