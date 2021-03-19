import React from 'react';
import './styles/common.less'
import { Row, Col } from 'antd'
import LeftNav from './components/LeftNav';
import Header from './components/Header';
import Footer from './components/Footer'

export default class Admin extends React.Component {

  render() {
    return (
      <Row className="main-wrap">
        <Col flex="0 0 232px" className="left-nav">
          <LeftNav />
        </Col>
        <Col flex="1" className="content-wrap">
          <Header />
          <Row className="content">
            {this.props.children}
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}
