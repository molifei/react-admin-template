import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div>
        这是Main
        <br />
        <Link to="/main/1">动态路由1</Link>
        <br />
        <Link to="/main/2">动态路由2</Link>
        <br />
        <Link to="/main/3">动态路由3</Link>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default Main;
