import React, { Component } from 'react';
import { Button, notification, Card, Space } from 'antd';

class Notification extends Component {

  openNotice = (type, placement) => {
    notification[type]({
      message: `这是一个 ${type} 通知`,
      description: `${type}`,
      placement,
      onClick: () => {
        console.log('Notification Clicked!');
      }
    });
  }

  render() {
    return (
      <>
        <Space direction="vertical">
          <Card title="基础用法">
            <Button onClick={() => this.openNotice('open')}>OPEN</Button>
          </Card>
          <Card title="类型通知">
            <Space>
              <Button onClick={() => this.openNotice('success')}>SUCCESS</Button>
              <Button onClick={() => this.openNotice('info')}>INFO</Button>
              <Button onClick={() => this.openNotice('warning')}>WARNING</Button>
              <Button onClick={() => this.openNotice('error')}>ERROR</Button>
            </Space>
          </Card>
          <Card title="不同方向">
            <Space>
              <Button type="primary" onClick={() => this.openNotice('open', 'topRight')}>右上</Button>
              <Button type="primary" onClick={() => this.openNotice('open', 'bottomRight')}>右下</Button>
              <Button type="primary" onClick={() => this.openNotice('open', 'topLeft')}>左上</Button>
              <Button type="primary" onClick={() => this.openNotice('open', 'bottomLeft')}>左下</Button>
            </Space>
          </Card>
        </Space>
      </>
    );
  }
}

export default Notification;
