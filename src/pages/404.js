import React from 'react'
import Layout from '../components/layout'


class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
    )
  }
}


export default NotFoundPage
