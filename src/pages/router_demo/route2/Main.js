import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div>
        这是Main
        <Link to="/main/a">嵌套路由</Link>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default Main;
