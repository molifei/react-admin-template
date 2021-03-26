import React, { Component } from 'react';
import { Space, Card, Button, Form, Input, Select, Table } from 'antd';
import ajax from '@/api'
import tools from '@/utils/utils'

const { Option } = Select

class City extends Component {

  state = {
    columns: [
      {
        title: '序号',
        dataIndex: 'index',
        key: 'index'
      },
      {
        title: '城市ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '用车模式',
        dataIndex: 'mode',
        key: 'id'
      },
      {
        title: '用车模式',
        dataIndex: 'operation',
        key: 'id'
      },
      {
        title: '授权加盟商',
        dataIndex: 'join',
        key: 'id'
      },
      {
        title: '城市管理员',
        dataIndex: 'manager',
        key: 'id'
      },
      {
        title: '城市开通时间',
        dataIndex: 'time',
        key: 'id'
      },
      {
        title: '操作时间',
        dataIndex: 'optionTime',
        key: 'id'
      },
      {
        title: '操作人',
        dataIndex: 'optionPerson',
        key: 'id'
      }
    ],
    dataSource: []
  }

  form = React.createRef()

  getTable = (val) => {
    console.log(val)
  }

  resetForm = () => {
    this.form.current.resetFields()
  }


  render() {


    return (
      <>
        <Space direction="vertical">
          <Card>
            <Form
              ref={this.form}
              layout="inline"
              onFinish={this.getTable}
              initialValues={{
                city: '',
                mode: ''
              }}
            >
              <Form.Item name="city" label="城市">
                <Select placeholder="请选择城市" style={{ width: 140 }}>
                  <Option value="">全部</Option>
                  <Option value="2">1号城市</Option>
                  <Option value="3">2号城市</Option>
                </Select>
              </Form.Item>
              <Form.Item name="mode" label="停车模式">
                <Select placeholder="请选择停车模式" style={{ width: 140 }}>
                  <Option value="">全部</Option>
                  <Option value="2">指定停车点</Option>
                  <Option value="3">禁停区模式</Option>
                </Select>
              </Form.Item>
              <Form.Item name="Operation" label="营运模式">
                <Select placeholder="请选择营运模式" style={{ width: 140 }}>
                  <Option value="1">自营</Option>
                  <Option value="2">加盟</Option>
                </Select>
              </Form.Item>
              <Form.Item name="status" label="加盟商授权状态">
                <Select placeholder="请选择加盟商授权状态" style={{ width: 140 }}>
                  <Option value="1">已授权</Option>
                  <Option value="2">未授权</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">SEARCH</Button>
              </Form.Item>
              <Form.Item>
                <Button onClick={this.resetForm}>RESET</Button>
              </Form.Item>
            </Form>
          </Card>
          <Card>
            <Table
              columns={this.state.columns}
              dataSource={this.state.dataSource} />
          </Card>
        </Space>
      </>
    );
  }
}

export default City;
