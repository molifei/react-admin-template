import React from 'react';
import { Row, Col, Menu, Dropdown } from 'antd'
import Utils from '@/utils/utils'

import './index.less'

let timer = null

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      menu: (
        <Menu>
          <Menu.Item>
            <a href="#" onClick={e => e.preventDefault()}>
              退出登录
            </a>
          </Menu.Item>
        </Menu>
      ),

      systemTime: null
    }
  }

  UNSAFE_componentWillMount() {
    this.getWeather()
  }

  UNSAFE_componentDidMount() {
    this.getTime()
  }

  UNSAFE_componentWillUnmount() {
    clearInterval(timer)
  }

  // 获取时间
  getTime = () => {
    timer = setInterval(() => {
      let systemTime = Utils.getDate(new Date())
      this.setState({
        systemTime
      })
    }, 1000)
  }

  // 获取天气
  getWeather = () => {
    // console.log('天气')
  }

  render() {
    return (
      <header>
        <Row className="header-top">
          <Col span={24}>
            <span>你好，欢迎</span>
            <Dropdown overlay={this.state.menu} placement="bottomCenter">
              <a href="#">操作</a>
            </Dropdown>
          </Col>
        </Row>
        <Row className="bread">
          <Col span={4} className="bread-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span>{this.state.systemTime}</span>
            <span>天气</span>
          </Col>
        </Row>
      </header>
    )
  }
}
