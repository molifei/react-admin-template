import React from 'react';
import "./index.less"
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';

// 引入菜单配置
import MenuList from "../../config/menu"

const {SubMenu} = Menu

class LeftNav extends React.Component {

  render() {
    return (
      <>
        <div className="logo">
          <img src="" alt=""/>
          <h1>MUSCLE ADMIN</h1>
        </div>
        <Menu theme="light">
          {

          }
          <SubMenu title={1}>
            <Menu.Item>123</Menu.Item>
            <Menu.Item>123</Menu.Item>
          </SubMenu>
          <Menu.Item>123</Menu.Item>
        </Menu>
      </>
    );
  }
}

export default LeftNav;