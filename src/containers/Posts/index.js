import React, { Component } from 'react';

import upvote from '../../img/upvote.svg';
import downvote from '../../img/downvote.svg';

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
                <div className="votes-container">
                  <div className="upvote">
                    {/* Upvotes: { posts[key].upvote } */}
                    <button 
                      id="upvote"
                      onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                      type="button"
                      style={{backgroundImage: `url(${upvote})`}}
                    >
                      {/* Upvote */}
                    </button>
                  </div>
                  <div className="score-container">
                    { posts[key].upvote - posts[key].downvote }
                  </div>
                  <div className="downvote">
                    {/* Downvotes: { posts[key].downvote } */}
                    <button
                      id="downvote"
                      onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                      type="button"
                      style={{backgroundImage: `url(${downvote})`}}
                    >
                      {/* Downvote */}
                    </button>
                  </div>
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
