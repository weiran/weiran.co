const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const page = path.resolve('./src/templates/page.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    passthroughUrl
                    type
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create pages
        const posts = result.data.allMarkdownRemark.edges
        const blogPosts = posts.filter(post => post.node.frontmatter.type !== "page")
        const pages = posts.filter(post => post.node.frontmatter.type === "page")

        _.each(blogPosts, (post, index) => {
          const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
          const next = index === 0 ? null : blogPosts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        _.each(pages, (post, index) => {
          createPage({
            path: post.node.fields.slug,
            component: page,
            context: {
              slug: post.node.fields.slug
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

const replacePath = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  return new Promise(resolve => {
    const oldPage = Object.assign({}, page)
    // Remove trailing slash unless page is /
    page.path = replacePath(page.path)
    if (page.path !== oldPage.path) {
      // Replace new page with old page
      deletePage(oldPage)
      createPage(page)
    }
    resolve()
  })
}
