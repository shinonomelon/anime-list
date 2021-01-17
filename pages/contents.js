import React, { Component } from 'react';
import Content from '../layouts/Content'

class PostsPage extends Component {
  static async getInitialProps({ query: { id } }) {
    return {
      id:id
    };
  }
  render() {
    return (
      <Content {...this.props} />
    );
  }
}

export default PostsPage;
