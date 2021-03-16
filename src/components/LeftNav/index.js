import React from 'react';
import './index.less'
import { Menu } from 'antd';

// 引入菜单配置
import MenuList from '@/config/menu'

const { SubMenu } = Menu

class LeftNav extends React.Component {

  constructor() {
    super();
    this.state = {
      menu: ''
    }
  }

  componentWillMount() {
    const menu = this.renderMenu(MenuList)
    this.setState({
      menu
    })
  }

  renderMenu = (menuList) => {
    let res
    return menuList.map(item => {
      item.children ?
        res = (
          <SubMenu title={item.title} key={item.key}>
            {
              this.renderMenu(item.children)
            }
          </SubMenu>
        ) :
        res = (
          <Menu.Item key={item.key}>{item.title}</Menu.Item>
        )
      return res
    })

  }

  render() {
    return (
      <>
        <div className="logo">
          <img src="/assets/logo.svg" alt="" />
          <h1>MUSCLE ADMIN</h1>
        </div>
        <Menu theme="dark">
          {this.state.menu}
        </Menu>
      </>
    );
  }
}

export default LeftNav;
