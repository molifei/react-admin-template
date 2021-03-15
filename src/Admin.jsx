import React from "react";
import "./styles/common.less"
import {Row, Col} from "antd"
import LeftNav from "./components/LeftNav";
import Header from "./components/Header";
import Footer from "./components/Footer"

export default class Admin extends React.Component {
  render() {
    return (
      <Row className="main-wrap">
        <Col span={4} className="left-nav">
          <LeftNav/>
        </Col>
        <Col span={20} className="content-wrap">
          <Header/>
          <Row className="content">

          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}
