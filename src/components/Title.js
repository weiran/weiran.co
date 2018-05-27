import React from 'react'

class Bio extends React.Component {
  render() {
    return (
        <div>
            {!this.props.passthroughUrl && (
                <a href={this.props.slug}>
                    {this.props.title}
                </a>
            )}
            {this.props.passthroughUrl && (
                <a href={this.props.passthroughUrl}>
                    {this.props.title} →
                </a>
            )}
        </div>
    )
  }
}

export default Bio
