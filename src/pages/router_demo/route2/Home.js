import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <ul>
            <li><Link to="/main">MAIN</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/top">TOP</Link></li>
          </ul>
        </HashRouter>
        <hr />
        {this.props.children}
      </>
    );
  }
}

export default Home;
