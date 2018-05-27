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
        marginBottom: rhythm(2)
      }}>
        <ul>
          {this.state.pages.map(page => 
            <li style={{
              display: "inline",
              margin: "0 " + rhythm(1.5)
            }}>
              <Link to={page.link}>
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
