import React from 'react'

import Link from 'gatsby-link'
import Index from '../pages'

import { rhythm, scale } from '../utils/typography'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    const pages = [{
      name: "Blog",
      link: "/"
    }, {
      name: "About",
      link: "/about"
    }, {
      name: "Projects",
      link: "/projects"
    }, {
      name: "Contact",
      link: "/contact"
    }]
    this.state = {
      pages: pages
    }
  }

  render() {
    return (
      <div style={{
        textAlign: "center",
        marginBottom: rhythm(1)
      }}>
        <ul style={{
          margin: 0
        }}>
          {this.state.pages.map((page, index) => 
            <li key={index} style={{
              display: "inline",
              margin: "0 " + rhythm(1.5)
            }}>
              <Link to={page.link} style={{
                color: 'white'
              }}>
                {page.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Nav
