import React from 'react'
import { Link } from 'gatsby'
import logoPic from '../../static/logo.png'
import Nav from './Nav'
import typography from '../utils/typography'
import './layout.css'
const rhythm = typography.rhythm
const scale = typography.scale

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    const rootPath = `${__PATH_PREFIX__}/`
    const isRoot = location.pathname === rootPath

    // if (isRoot) {
    if (false) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            textAlign: 'center',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <img
              src={logoPic}
              alt={`weiranzhang.com`}
              style={{
                width: rhythm(14),
              }}
            />
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            textAlign: 'center',
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            ⌘<br />weiranzhang.com
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            paddingBottom: isRoot ? rhythm(1.5) : rhythm(0.5)
          }}
        >
          {header}
          <Nav />
        </div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default Template
