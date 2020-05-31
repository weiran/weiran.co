import React from 'react'
import { Link } from 'gatsby'

import Title from '../components/Title'

import typography from '../utils/typography'
const rhythm = typography.rhythm
const scale = typography.scale

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.posts
    return (
      <div>
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
    )
  }
}