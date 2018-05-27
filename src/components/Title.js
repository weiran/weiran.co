import React from 'react'

class Bio extends React.Component {
  render() {
    return (
        <div>
            {!this.props.passthroughUrl && (<h1>{this.props.title}</h1>)}
            {this.props.passthroughUrl && (
            <h1>
                <a href={this.props.passthroughUrl}>
                {this.props.title}
                </a>
            </h1>
            )}
        </div>
    )
  }
}

export default Bio
