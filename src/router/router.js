import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from '../App'

// import AnimatedRouter from 'react-animated-router'; // 我们的AnimatedRouter组件
// import 'react-animated-router/animate.css'; // 引入默认的动画样式定义

import Login from '@/pages/login'
import Admin from '@/Admin'

import Main from '@/pages/main'

import UiButtons from '@/pages/ui/buttons'
import UiModals from '@/pages/ui/modals'
import UiLoadings from '@/pages/ui/loadings'
import UiNotification from '@/pages/ui/notification'
import UiMessages from '@/pages/ui/messages'
import UiTabs from '@/pages/ui/tabs'

import NotFound from '@/pages/notFound'

class Router extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <App>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/admin" render={() =>
                <Admin>
                  <Route path="/admin/home" component={Main} />
                  <Route path="/admin/ui/buttons" component={UiButtons} />
                  <Route path="/admin/ui/modals" component={UiModals} />
                  <Route path="/admin/ui/loadings" component={UiLoadings} />
                  <Route path="/admin/ui/notification" component={UiNotification} />
                  <Route path="/admin/ui/messages" component={UiMessages} />
                  <Route path="/admin/ui/tabs" component={UiTabs} />
                </Admin>
              } />
              <Route component={NotFound} />
            </Switch>
          </App>
        </HashRouter>
      </>
    );
  }
}

export default Router;
