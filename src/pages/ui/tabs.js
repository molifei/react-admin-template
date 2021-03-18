import React, {Component} from 'react';
import {Tabs, Space, Card, message} from 'antd'
import {AppleOutlined, AndroidOutlined} from '@ant-design/icons';

const {TabPane} = Tabs;

class UiTabs extends Component {

  tabClick = (key) => {
    message.success(`选了${key}`)
  }

  render() {
    return (
      <>
        <Space direction="vertical">
          <Card title="Tab页签">
            <Tabs defaultActiveKey="1" onChange={this.tabClick}>
              <TabPane tab="Tab 1" key="1">
                第一
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                第二
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                第三
              </TabPane>
            </Tabs>
          </Card>
          <Card title="Tab页签">
            <Tabs defaultActiveKey="1" onChange={this.tabClick}>
              <TabPane tab={<span><AppleOutlined/>Tab 1</span>} key="apple">
                第一
              </TabPane>
              <TabPane
                tab={<span><AndroidOutlined/>Tab 2</span>} key="android">
                第二
              </TabPane>
            </Tabs>
          </Card>
        </Space>
      </>
    );
  }
}

export default UiTabs;
