import React, { Component } from 'react';
import PostForm from './PostForm';

class PostEleve extends Component {
  componentWillMount() {
    fetch('');
  }

  render() {
    return (
        <div>
          <PostForm />
        </div>
    );
  }
}

export default PostEleve;