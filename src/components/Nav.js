import React from 'react'

import Link from 'gatsby-link'
import Index from '../pages'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={Index}>
              Blog
            </Link>
          </li>
          <li>
            <Link to={Index}>
              About
            </Link>
          </li>
          <li>
            <Link>
              Projects
            </Link>
          </li>
          <li>
            <Link>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
