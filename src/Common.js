import React from 'react';
import './styles/common.less'
import {Row, Col} from 'antd'
import Header from './components/Header';

export default class Common extends React.Component {

  render() {
    return (
      <Col className="content-wrap">
        <Header type="link"/>
        <Row className="content">
          {this.props.children}
        </Row>
      </Col>
    )
  }
}
