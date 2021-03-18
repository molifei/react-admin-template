import React, { Component } from 'react';
import { Card, Button, Space, Slider } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, DownloadOutlined, DribbbleOutlined } from '@ant-design/icons';
import './ui.less'

class UiButton extends Component {
  state = {
    loading: true,
    marks: {
      0: '小',
      1: '中',
      2: '大'
    },
    size: 'middle'
  }

  startLoading = () => {
    this.setState({
      loading: true
    })
  }

  closeLoading = () => {
    this.setState({
      loading: false
    })
  }

  sizeChange = (size) => {
    let sizeArr = ['small', 'middle', 'large']
    this.setState({
      size: sizeArr[size]
    })
  }

  render() {
    return (
      <Space direction="vertical">
        <Card title="基础按钮">
          <Space>
            <Button type="primary">基础</Button>
            <Button>默认</Button>
            <Button type="dashed">虚线</Button>
            <Button type="danger">危险</Button>
            <Button disabled>禁止</Button>
            <Button type="link">链接</Button>
          </Space>
        </Card>

        <Card title="图形按钮">
          <Space>
            <Button icon={<PlusOutlined />}>创建</Button>
            <Button icon={<EditOutlined />}>编辑</Button>
            <Button icon={<DeleteOutlined />}>删除</Button>
            <Button shape="circle" icon={<SearchOutlined />} />
            <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
            <Button type="primary" icon={<DownloadOutlined />}>下载</Button>
          </Space>
        </Card>

        <Card title="加载按钮">
          <Space>
            <Button type="primary" loading={this.state.loading}>加载</Button>
            <Button type="primary" icon={<DribbbleOutlined />} shape="circle" loading={this.state.loading} />
            <Button loading={this.state.loading}>加载</Button>
            <Button shape="circle" icon={<DribbbleOutlined />} loading={this.state.loading} />
            <Button type="primary" onClick={this.startLoading} disabled={this.state.loading}>开启加载</Button>
            <Button onClick={this.closeLoading} disabled={!this.state.loading}>关闭加载</Button>
          </Space>
        </Card>

        <Card title="按钮尺寸">
          <Slider style={{ width: '200px' }} marks={this.state.marks} defaultValue={1} max={2} min={0} onChange={this.sizeChange} />
          <Space direction="vertical">
            <Space>
              <Button type="primary" size={this.state.size}>大小改变</Button>
            </Space>
            <Space>
              <Button type="primary" size="small">小SMALL</Button>
              <Button type="primary" size="middle">中MIDDLE</Button>
              <Button type="primary" size="large">大LARGE</Button>
            </Space>
          </Space>
        </Card>
      </Space>
    );
  }
}

export default UiButton;
