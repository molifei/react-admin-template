import React from 'react';
import './index.less'
import {Menu} from 'antd';
import {NavLink, withRouter} from 'react-router-dom'

// 引入菜单配置
import MenuList from '@/config/menu'

const {SubMenu} = Menu

class LeftNav extends React.Component {

  constructor() {
    super();
    this.state = {
      menu: '',
      openKeys: '',
      rootSubmenuKeys: []
    }
  }

  UNSAFE_componentWillMount() {
    const menu = this.renderMenu(MenuList)
    this.setState({
      menu
    })
  }

  renderMenu = (menuList) => {
    let res,
      {rootSubmenuKeys} = this.state
    return menuList.map(item => {
      rootSubmenuKeys.push(item.key)
      item.children ?
        res = (
          <SubMenu title={item.title} key={item.key}>
            {
              this.renderMenu(item.children)
            }
          </SubMenu>
        ) :
        res = (
          <Menu.Item key={item.key}><NavLink to={item.key}>{item.title}</NavLink></Menu.Item>
        )
      this.setState(rootSubmenuKeys)
      return res
    })

  }

  onOpenChange = keys => {
    let {openKeys, rootSubmenuKeys} = this.state
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({
        openKeys: keys
      })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  };

  render() {
    return (
      <>
        <div className="logo">
          <img src="/assets/logo.svg" alt=""/>
          <h1>MUSCLE ADMIN</h1>
        </div>
        <Menu theme="dark" openKeys={this.state.openKeys} mode="inline" onOpenChange={this.onOpenChange} selectedKeys={[this.props.location.pathname]}>
          {this.state.menu}
        </Menu>
      </>
    );
  }
}

export default withRouter(LeftNav);
