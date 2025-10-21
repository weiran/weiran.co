import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
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
        <Helmet>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#F9C48B" />
          <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
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
