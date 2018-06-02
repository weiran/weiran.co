import React from 'react'
import Link from 'gatsby-link'

import logoPic from '../../static/logo.png'

import lato from 'typeface-lato'

import { rhythm, scale } from '../utils/typography'

import Nav from '../components/Nav'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
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
              alt={`weiran.co`}
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
            weiran.co
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <div style={{
          backgroundColor: '#0cbaba',
          backgroundImage: 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)'
        }}>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              color: 'white',
            }}
          >
            {header}
            <Nav />
          </div>
        </div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children()}
        </div>
      </div>
    )
  }
}

export default Template
