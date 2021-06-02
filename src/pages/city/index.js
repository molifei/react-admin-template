import React, { Component } from 'react';
import { Space, Card, Button, Form, Select, Table, Modal } from 'antd';
import ajax from '@/api'
import './index.less'

const { Option } = Select

class City extends Component {

  state = {
    columns: [
      {
        title: '序号',
        render: (text, record, index) => `${index + 1}`,
        key: 'id'
      },
      {
        title: '城市ID',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: '用车模式',
        dataIndex: 'mode',
        key: 'id',
        render: (text) => text === 1 ? '指定停车点' : '禁停区模式'
      },
      {
        title: '运营模式',
        dataIndex: 'operation',
        key: 'id',
        render: (text) => text === 1 ? '自营' : '加盟'
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
    dataSource: [],
    formData: {},
    tableLoading: false,
    cityVisible: false
  }

  componentDidMount() {
    this.getTableData()
  }

  cityInfo = React.forwardRef()

  getTable = (val) => {
    console.log(val)
    this.setState({
      formData: val
    })
    this.getTableData()
  }

  async getTableData() {
    this.setState({ tableLoading: true })
    const res = await ajax({ url: '/city/list' })
    // console.log(res)
    if (res.data.status) {
      this.setState({
        dataSource: res.data.data,
        tableLoading: false
      })
    }
  }

  openCity = () => {
    console.log('开通')
    this.setState({ cityVisible: true })
  }

  openCityHandle = () => {
    let info = this.cityInfo
    console.log(info)
  }

  render() {
    return (
      <>
        <Space direction="vertical">
          <Card>
            <AddForm ref={this.form} name="search" getTable={this.getTable} />
          </Card>
          <Card>
            <Button type="primary" onClick={this.openCity}>开通</Button>

            <Modal
              centered
              title="开通"
              visible={this.state.cityVisible}
              onCancel={() => this.setState({ cityVisible: false })}
              onOk={this.openCityHandle}
              okText="确认"
              cancelText="取消"
              destroyOnClose
            >
              <CityForm ref={this.cityInfo} />
            </Modal>

          </Card>
          <Card>
            <Table
              scroll={{ y: 500 }}
              loading={this.state.tableLoading}
              columns={this.state.columns}
              dataSource={this.state.dataSource}
              rowKey={r => r.id}
            />
          </Card>
        </Space>
      </>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
class AddForm extends Component {
  form = React.createRef()

  getFormData = (val) => {
    this.props.getTable(val)
  }

  resetForm = () => {
    this.form.current.resetFields()
    this.getFormData({})
  }

  render() {
    return (
      <Form
        ref={this.form}
        layout="inline"
        onFinish={this.getFormData}
        initialValues={{
          city: '',
          mode: '',
          operation: '',
          status: ''
        }}
      >
        <Form.Item name="city" label="城市">
          <Select placeholder="请选择城市" style={{ width: 140, marginBottom: 8 }}>
            <Option value="">全部</Option>
            <Option value="2">1号城市</Option>
            <Option value="3">2号城市</Option>
          </Select>
        </Form.Item>
        <Form.Item name="mode" label="用车模式">
          <Select placeholder="请选择用车模式" style={{ width: 140, marginBottom: 8 }}>
            <Option value="">全部</Option>
            <Option value="2">指定停车点</Option>
            <Option value="3">禁停区模式</Option>
          </Select>
        </Form.Item>
        <Form.Item name="operation" label="营运模式">
          <Select placeholder="请选择营运模式" style={{ width: 140, marginBottom: 8 }}>
            <Option value="">全部</Option>
            <Option value="1">自营</Option>
            <Option value="2">加盟</Option>
          </Select>
        </Form.Item>
        <Form.Item name="status" label="加盟商授权状态">
          <Select placeholder="请选择加盟商授权状态" style={{ width: 140, marginBottom: 8 }}>
            <Option value="">全部</Option>
            <Option value="1">已授权</Option>
            <Option value="2">未授权</Option>
          </Select>
        </Form.Item>
        {
          this.props.name === 'search' && <Form.Item>
            <Button type="primary" htmlType="submit">SEARCH</Button>
          </Form.Item>
        }

        {
          this.props.name === 'search' && <Form.Item>
            <Button onClick={this.resetForm}>RESET</Button>
          </Form.Item>
        }
      </Form>
    )
  }
}

// eslint-disable-next-line react/no-multi-comp
const CityForm = (props) => {
  const [cities, setCities] = React.useState([{ value: '', name: '全部' }])

  const formLayout = {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 20
    }
  }

  const getCityList = async() => {
    console.log(props)
    const res = await ajax({ url: '/getCity' })

    console.log(res)
    if (res.data.status) {
      setCities([
        { value: '', name: '全部' },
        ...res.data.data
      ])
    }

  }

  return (
    <Form
      initialValues={{
        city: ''
      }}
      {...formLayout}
    >
      <Form.Item
        name="city"
        label="选择城市"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Select
          onFocus={getCityList}
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {
            cities.map((item, index) => {
              return (
                <Option
                  key={index}
                  value={item.value}>
                  {item.name}
                </Option>
              )
            })
          }
        </Select>
      </Form.Item>
      <Form.Item
        name="operation"
        label="营运模式"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Select placeholder="请选择营运模式">
          <Option value={1}>自营</Option>
          <Option value={2}>加盟</Option>
        </Select>
      </Form.Item>
      <Form.Item name="mode" label="用车模式">
        <Select placeholder="请选择用车模式">
          <Option value={1}>指定停车点</Option>
          <Option value={2}>禁停区</Option>
        </Select>
      </Form.Item>
    </Form>
  );
}

// eslint-disable-next-line react/no-multi-comp


export default City;
