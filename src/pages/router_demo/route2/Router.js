import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Main from './Main';
import MainA from './MainA';
import About from './About';
import Top from './Top';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Home>
          <Route path="/" render={() =>
            <Redirect to="/main" />
          } />
          <Route path="/main" component={() =>
            <Main>
              <Route path="/main/a" component={MainA} />
            </Main>
          } />
          <Route path="/about" component={About} />
          <Route path="/top" component={Top} />
        </Home>
      </HashRouter>
    );
  }
}

export default Router;
