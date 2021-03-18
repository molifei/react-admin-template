import React, { Component } from 'react'
import { Card, Space, Button, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { confirm } = Modal

class Modals extends Component {

  state = {
    visible1: false,
    visible2: false,
    visible3: false
  }

  openModal = (keyName) => {
    this.setState({
      ...{ [keyName]: true }
    })
  }

  closeModal = (keyName) => {
    this.setState({
      [keyName]: false
    })
  }

  openMessageTip = (type) => {
    Modal[type]({
      title: `This is a ${type} notification message`,
      content: (
        <div>
          {type}
        </div>
      ),
      onOk() {
      }
    });
  }

  openConfirm = () => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  }

  render() {
    return (
      <>
        <Space direction="vertical">
          <Card title="基础弹窗">
            <Space>
              <Button type="primary" onClick={() => this.openModal('visible1')}>OPEN</Button>
              <Modal
                title="基础弹窗"
                visible={this.state.visible1}
                okText="确认"
                cancelText="取消"
                onOk={() => this.closeModal('visible1')}
                onCancel={() => this.closeModal('visible1')}>
                <p>这是一个弹窗</p>
              </Modal>

              <Button type="primary" onClick={() => this.openModal('visible2')}>自定义页脚</Button>
              <Modal
                visible={this.state.visible2}
                title="自定义页脚"
                onOk={() => this.closeModal('visible2')}
                onCancel={() => this.closeModal('visible2')}
                footer={[
                  <Button key="back" onClick={() => this.closeModal('visible2')}>
                    自定义返回
                  </Button>,
                  <Button key="submit" type="primary">
                    提交
                  </Button>,
                  <Button
                    key="link"
                    type="primary">
                    搜索
                  </Button>
                ]}
              >
                <p>自定义页脚</p>
              </Modal>

              <Button type="primary" onClick={() => this.openModal('visible3')}>居中</Button>
              <Modal
                title="居中弹窗"
                centered
                visible={this.state.visible3}
                onOk={() => this.closeModal('visible3')}
                onCancel={() => this.closeModal('visible3')}>
                <p>居中展示</p>
              </Modal>

            </Space>
          </Card>
          <Card title="信息提示框">
            <Space>
              <Button onClick={() => this.openMessageTip('info')}>Info</Button>
              <Button onClick={() => this.openMessageTip('success')}>Success</Button>
              <Button onClick={() => this.openMessageTip('error')}>Error</Button>
              <Button onClick={() => this.openMessageTip('warning')}>Warning</Button>
            </Space>
          </Card>
          <Card title="信息确认框">
            <Space>
              <Button onClick={this.openConfirm}>OPEN</Button>
            </Space>
          </Card>
        </Space>
      </>
    );
  }
}

export default Modals;
