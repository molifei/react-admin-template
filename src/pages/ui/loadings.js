import React, { Component } from 'react';
import { Spin, Card, Space, Button, Input } from 'antd'

class Loadings extends Component {
  state = {
    loading: true,
    tip: ''
  }

  loadingState = (state) => {
    this.setState({
      loading: state
    })
  }

  changeTip = (e) => {
    this.setState({
      tip: e.target.value
    })
  }

  render() {
    return (
      <>
        <Space direction="vertical">
          <Card title="基础加载">
            <Space>
              <Spin spinning={this.state.loading} />
              <Button type="primary" onClick={() => this.loadingState(true)} disabled={this.state.loading}>开始加载</Button>
              <Button onClick={() => this.loadingState(false)} disabled={!this.state.loading}>结束加载</Button>
            </Space>
          </Card>
          <Card title="各种大小加载">
            <Space>
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Space>
          </Card>
          <Card title="在某个容器中加载">
            <Space>
              <Spin size="small">
                <Button>加载的按钮容器</Button>
              </Spin>
            </Space>
          </Card>
          <Card title="自定义加载文字">
            <Space direction="vertical">
              <Input placeholder="输入文字" onInput={this.changeTip} style={{ width: '300px' }} />
              <Spin tip={this.state.tip} />
            </Space>
          </Card>
        </Space>
      </>
    );
  }
}

export default Loadings;
