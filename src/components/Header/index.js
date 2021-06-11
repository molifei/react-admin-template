import React from 'react';
import {Row, Col, Menu, Dropdown} from 'antd'
import Utils from '@/utils/utils'

import './index.less'

let timer = null

export default class Header extends React.Component {
  state = {
    systemTime: null
  }

  UNSAFE_componentWillMount() {
    this.getWeather()
  }

  menu = (
    <Menu>
      <Menu.Item>
        <a href="#" onClick={e => e.preventDefault()}>
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  )

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

    let {type} = this.props

    return (
      <header className={type === 'link' ? 'link-header' : ''}>
        <Row className="header-top">
          {
            type === 'link' &&
            (
              <Col span={4}>
                <img className="link-img" src="/assets/logo.svg" alt=""/>
              </Col>

            )
          }
          <Col span={type === 'link' ? 20 : 24}>
            <span>你好，欢迎</span>
            <Dropdown overlay={this.menu} placement="bottomCenter">
              <a href="#">操作</a>
            </Dropdown>
          </Col>
        </Row>
        {
          type === 'link' ?
            '' :
            (
              <>
                <Row className="bread">
                  <Col span={4} className="bread-title">
                    首页
                  </Col>
                  <Col span={20} className="weather">
                    <span>{this.state.systemTime}</span>
                    <span>天气</span>
                  </Col>
                </Row>
              </>
            )
        }
      </header>
    )
  }
}
