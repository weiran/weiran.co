import React from 'react'

import profilePic from './profile-pic.jpeg'
import typography from '../utils/typography'
const rhythm = typography.rhythm

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1)
        }}
      >
        <img
          src={profilePic}
          alt={`Weiran Zhang`}
          style={{
            marginRight: rhythm(1 / 2),
            marginTop: 'auto',
            marginBottom: 'auto',
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%'
          }}
        />
        <p style={{
          marginBottom: 0
        }}>
          Hi, I'm <strong>Weiran Zhang</strong>. I work as a Senior 
          Engineering Manager at Capital One. I have a passion for technology and
          building thriving software teams. This blog is where I write about things I find interesting.
          {' '}
          <a rel='me' href='https://mastodon.social/@weiran'>
            You can follow me on Mastodon
          </a>
          .
        </p>
      </div>
    )
  }
}

export default Bio
