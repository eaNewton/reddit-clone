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
        <div className="posts-container">
          {Object.keys(posts).map(function (key) {
            return (
              <div className="single-post" key={key}>
                <h2 className="post-title">{posts[key].title}</h2>
                {posts[key].content}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Posts;
