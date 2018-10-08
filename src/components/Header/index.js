import React from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div id="logo" className="header-image"></div>
        <div className="menu-container">
          <ul className="menu">
            <li className="menu-item">
              <a href="/posts">Home</a>
            </li>
            <li className="menu-item">
              <a href="/add-post">Add Post</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
