import React from 'react';
import './styles/common.less'
import { Row, Col } from 'antd'
import Header from './components/Header';
import LeftNav from '@/components/LeftNav';
import Footer from '@/components/Footer';

export default class Common extends React.Component {

  render() {
    return (
      <Row className="main-wrap">
        <Col flex="1" className="content-wrap">
          <Header type="link" />
          <Row className="content">
            {this.props.children}
          </Row>
        </Col>
      </Row>
    )
  }
}
