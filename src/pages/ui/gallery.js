import React, {Component} from 'react';
import {Card, Row, Col, Modal, Button} from 'antd'

const {Meta} = Card

class Gallery extends Component {

  state = {
    visible: false,
    url: ''
  }

  viewPictured = (url) => {
    this.setState({
      visible: true,
      url: '/assets/gallery/' + url
    })
  }

  render() {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '9.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png']
    ]

    const imgList = imgs.map(list =>
      list.map(item =>
        <Card
          key={item}
          style={{marginBottom: 10}}
          cover={
            <img
              src={`/assets/gallery/${item}`}
              alt="图片"
              onClick={() => this.viewPictured(item)}/>
          }
        >
          <Meta
            title="图片"
            description="不错哦"
          />
        </Card>
      )
    )

    return (
      <div className="container-wrap">
        <Row gutter={10}>
          <Col md={5}>
            {imgList[0]}
          </Col>
          <Col md={5}>
            {imgList[1]}
          </Col>
          <Col md={5}>
            {imgList[2]}
          </Col>
          <Col md={5}>
            {imgList[3]}
          </Col>
          <Col md={4}>
            {imgList[4]}
          </Col>
        </Row>

        <Modal
          className="view-modal"
          visible={this.state.visible}
          title="图片预览"
          footer={[
            <Button key="back" onClick={() => this.setState({visible: false})}>关闭</Button>
          ]}
        >
          <img src={this.state.url} alt=""/>
        </Modal>

      </div>
    );
  }

}

export default Gallery;
