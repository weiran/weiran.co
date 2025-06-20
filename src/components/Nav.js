import React from 'react'
import { Link } from 'gatsby'
import typography from '../utils/typography'
const rhythm = typography.rhythm

class Nav extends React.Component {
  constructor(props) {
    super(props)
    const pages = [{
      name: 'Home',
      link: '/'
    }, {
      name: 'Blog',
      link: '/blog'
    }, {
      name: 'About',
      link: '/about'
    }, {
      name: 'Projects',
      link: '/projects'
    }, {
      name: 'Contact',
      link: '/contact'
    }]
    this.state = {
      pages: pages
    }
  }

  render() {
    return (
      <div className='nav' style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: rhythm(2)
      }}>
        {this.state.pages.map((page, index) => 
          <div key={index} style={{
            flex: '1 1 auto',
            margin: '0 ' + rhythm(1)
          }}>
            <Link to={page.link}>
              {page.name}
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default Nav
