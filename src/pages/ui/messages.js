import React, { Component } from 'react';
import { Card, Space, Button, message } from 'antd';

class Messages extends Component {

  openMessage = (type) => {
    message[type]('This is a ' + type + ' message');
  }

  render() {
    return (
      <>
        <Space direction="vertical">
          <Card title="普通提示">
            <Button onClick={() => this.openMessage('info')}>OPEN</Button>
          </Card>
          <Card title="类型提示">
            <Space>
              <Button onClick={() => this.openMessage('success')}>SUCCESS</Button>
              <Button onClick={() => this.openMessage('error')}>ERROR</Button>
              <Button onClick={() => this.openMessage('warning')}>WARNING</Button>
            </Space>
          </Card>
          <Card title="加载中的提示">
            <Button onClick={() => this.openMessage('loading')}>LOADING</Button>
          </Card>
        </Space>
      </>
    );
  }
}

export default Messages;
