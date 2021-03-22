import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from '../App'

import AnimatedRouter from 'react-animated-router'; // 我们的AnimatedRouter组件
import 'react-animated-router/animate.css'; // 引入默认的动画样式定义

import Login from '@/pages/login'
import Admin from '@/Admin'

import Main from '@/pages/main'

import UiButtons from '@/pages/ui/buttons'
import UiModals from '@/pages/ui/modals'
import UiLoadings from '@/pages/ui/loadings'
import UiNotification from '@/pages/ui/notification'
import UiMessages from '@/pages/ui/messages'
import UiTabs from '@/pages/ui/tabs'
import UiGallery from '@/pages/ui/gallery'
import UiCarousel from '@/pages/ui/carousel'

import FormLogin from '@/pages/form/login'
import FormRegister from '@/pages/form/register'

import TableBasic from '@/pages/table/basic'

import NotFound from '@/pages/notFound'

class Router extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <App>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" render={() =>
                <Admin>
                  <AnimatedRouter>
                    <Route path="/home" component={Main} />
                    <Route path="/ui/buttons" component={UiButtons} />
                    <Route path="/ui/modals" component={UiModals} />
                    <Route path="/ui/loadings" component={UiLoadings} />
                    <Route path="/ui/notification" component={UiNotification} />
                    <Route path="/ui/messages" component={UiMessages} />
                    <Route path="/ui/tabs" component={UiTabs} />
                    <Route path="/ui/gallery" component={UiGallery} />
                    <Route path="/ui/carousel" component={UiCarousel} />
                    <Route path="/form/login" component={FormLogin} />
                    <Route path="/form/register" component={FormRegister} />
                    <Route path="/table/basic" component={TableBasic} />
                  </AnimatedRouter>
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
