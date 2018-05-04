import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('this will be good a time to call an action creator to fetch posts');
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;
