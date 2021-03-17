import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from '../App'

import Login from '@/pages/login'
import Admin from '@/Admin'

import UiButton from '@/pages/ui/buttons'

import NotFound from '@/pages/notFound'

class Router extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <App>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/admin" component={() =>
                <Admin>
                  <Route path="/admin/ui/button" component={UiButton} />
                </Admin>
              } />
              <Route path="/l" component={Admin} />
              <Route component={NotFound} />
            </Switch>
          </App>
        </HashRouter>
      </>
    );
  }
}

export default Router;
