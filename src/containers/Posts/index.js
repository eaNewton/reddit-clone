import React, { Component } from 'react';

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote
    });
  }

  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1
    });
  }

  render() {
    let posts = this.props.posts;
    let _this = this;

    if (!posts) {
      return false;
    }

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
                  <div className="upvote">
                    Upvotes: { posts[key].upvote }
                    <button 
                      onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                      type="button"
                    >
                      Upvote
                    </button>
                  </div>
                  <div className="downvote">
                    Downvotes: { posts[key].downvote }
                    <button
                      onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                      type="button"
                    >
                      Downvote
                    </button>
                </div>
                <h2 className="post-title">{posts[key].title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Posts;
