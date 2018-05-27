import React from 'react'

// Import typefaces
import 'typeface-sunflower'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Weiran Zhang`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Weiran Zhang</strong> who lives and works in Nottingham.{' '}
          <a href="https://twitter.com/weiran">
            You should follow him on Twitter
          </a>
          .
        </p>
      </div>
    )
  }
}

export default Bio
