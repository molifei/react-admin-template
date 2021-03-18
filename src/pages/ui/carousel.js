import React, {Component} from 'react';
import {Card, Carousel, Space} from 'antd';

class UiCarousel extends Component {
  render() {
    return (
      <>
        <Space direction="vertical">
          <Card title="文字轮播">
            <Carousel className="swipe-wrap">
              <div><h1>1</h1></div>
              <div><h1>2</h1></div>
              <div><h1>3</h1></div>
              <div><h1>4</h1></div>
            </Carousel>
          </Card>
          <Card title="图片轮播">
            <Carousel className="swipe-wrap">
              <img src="/assets/swipe/1.jpg" alt=""/>
              <img src="/assets/swipe/2.jpg" alt=""/>
              <img src="/assets/swipe/3.jpg" alt=""/>
              <img src="/assets/swipe/4.jpg" alt=""/>
            </Carousel>
          </Card>
        </Space>
      </>
    );
  }
}

export default UiCarousel;