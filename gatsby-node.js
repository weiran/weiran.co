const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const page = path.resolve('./src/templates/page.js')
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const blogList = path.resolve('./src/templates/blog-list.js')

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

        const posts = result.data.allMarkdownRemark.edges

        // Create pages
        const pages = posts.filter(post => post.node.frontmatter.type === 'page')
        _.each(pages, (post, index) => {
          createPage({
            path: post.node.fields.slug,
            component: page,
            context: {
              slug: post.node.fields.slug
            },
          })
        })

        // Create blog posts
        const blogPosts = posts.filter(post => post.node.frontmatter.type !== 'page')
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

        // Create blog post list pages
        const postsPerPage = 12;
        const numPages = Math.ceil(blogPosts.length / postsPerPage);
    
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/` : `blog/${i + 1}`,
            component: blogList,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
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
