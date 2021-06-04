import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import Common from '../Common'

import AnimatedRouter from 'react-animated-router'; // AnimatedRouter组件
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
import TableHigh from '@/pages/table/high'

import City from '@/pages/city'
import Order from '@/pages/order'
import OrderDetail from '@/pages/order/detail'

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
                    <Route path="/admin/home" component={Main} />
                    <Route path="/admin/ui/buttons" component={UiButtons} />
                    <Route path="/admin/ui/modals" component={UiModals} />
                    <Route path="/admin/ui/loadings" component={UiLoadings} />
                    <Route path="/admin/ui/notification" component={UiNotification} />
                    <Route path="/admin/ui/messages" component={UiMessages} />
                    <Route path="/admin/ui/tabs" component={UiTabs} />
                    <Route path="/admin/ui/gallery" component={UiGallery} />
                    <Route path="/admin/ui/carousel" component={UiCarousel} />
                    <Route path="/admin/form/login" component={FormLogin} />
                    <Route path="/admin/form/register" component={FormRegister} />
                    <Route path="/admin/table/basic" component={TableBasic} />
                    <Route path="/admin/table/high" component={TableHigh} />
                    <Route path="/admin/city" component={City} />
                    <Route path="/admin/order" component={Order} />
                  </AnimatedRouter>
                </Admin>
              } />
              <Route path="/" render={() =>
                <Common>
                  <Route path="/link/order/detail/:id" component={OrderDetail} />
                </Common>
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
