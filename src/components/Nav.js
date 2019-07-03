import React from 'react'
import { Link } from 'gatsby'
import typography from '../utils/typography'
const rhythm = typography.rhythm

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
        <ul class="nav" style={{
          margin: 0
        }}>
          {this.state.pages.map((page, index) => 
            <li key={index} style={{
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
