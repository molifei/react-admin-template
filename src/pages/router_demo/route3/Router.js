import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './Home'
import Main from './Main';
import About from './About';
import Top from './Top';
import Info from './Info'
import NotFound from './NotFound'

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Home>
          <Route path="/" render={() =>
            <Redirect to="/main" />
          } />
          <Switch>
            <Route path="/main" component={() =>
              <Main>
                <Route path="/main/:id" component={Info} />
              </Main>
            } />
            <Route path="/about" component={About} />
            <Route path="/top" component={Top} />
            <Route component={NotFound} />
          </Switch>
        </Home>
      </HashRouter>
    );
  }
}

export default Router;
