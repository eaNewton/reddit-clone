import React, { Component } from 'react';

class Posts extends Component {
  render() {
    let posts = this.props.posts;

    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <div className="Posts">
        { Object.keys(posts).map(function(key) {
          return (
            <div className="single-post" key={key}>
              { posts[key].title }
              { posts[key].content }
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
