import React from 'react';
import { Space, Card, Button, Table, Form, Select, Modal, message } from 'antd'
import ajax from '@/api'
import tools from '@/utils/utils'

const { Option } = Select

const Order = () => {

  const [tableLoading, setTableLoading] = React.useState(false)
  const [dataSource, setDataSource] = React.useState([])
  const [formData, setFormData] = React.useState({})

  const orderFormRef = React.useRef(null)

  React.useEffect(() => {
    getOrderTable()
  }, [])

  const columns = [
    {
      title: '序号',
      render: (text, record, index) => `${index + 1}`,
      key: 'id'
    },
    {
      title: '订单编号',
      dataIndex: 'orderId',
      key: 'id'
    },
    {
      title: '车辆编号',
      dataIndex: 'carId',
      key: 'id'
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'id'
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'id'
    },
    {
      title: '里程',
      dataIndex: 'mileage',
      key: 'id'
    },
    {
      title: '行程时长',
      dataIndex: 'duration',
      key: 'id'
    },
    {
      title: '状态',
      dataIndex: 'optionTime',
      key: 'id',
      render: (text) => text === 1 ? '进行中' : '已结束'
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      key: 'id',
      render: text => tools.getDate(text)
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'id',
      render: text => tools.getDate(text)
    },
    {
      title: '订单金额',
      dataIndex: 'orderPrice',
      key: 'id',
      render: text => text + '元'
    },
    {
      title: '实付金额',
      dataIndex: 'realPrice',
      key: 'id',
      render: text => text + '元'
    }
  ]

  const getFormData = (val) => {
    console.log(val)
    setFormData(val)
    getOrderTable()
  }

  const getOrderTable = async() => {
    const res = await ajax({
      url: '/getOrderList'
    })

    if (res.data.status) {
      setDataSource(res.data.data)
    } else {
      setDataSource([])
    }
  }

  return (
    <>
      <Space direction="vertical">
        <Card>
          <FilterForm ref={orderFormRef} getFormData={getFormData} />
        </Card>
        <Card>
          <Space>
            <Button type="primary">订单详情</Button>
            <Button>结束订单</Button>
          </Space>
        </Card>
        <Card>
          <Table
            bordered
            scroll={{ y: 500 }}
            loading={tableLoading}
            columns={columns}
            dataSource={dataSource}
            rowKey={r => r.id}
          />
        </Card>
      </Space>
    </>
  );
}

// eslint-disable-next-line react/no-multi-comp
const FilterForm = React.forwardRef((props, ref) => {

  const resetForm = () => {
    ref.current.resetFields()
    props.getFormData()
  }

  return (
    <Form
      ref={ref}
      layout="inline"
      onFinish={props.getFormData}
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
      <Form.Item>
        <Button type="primary" htmlType="submit">SEARCH</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={resetForm}>RESET</Button>
      </Form.Item>
    </Form>
  )
})

export default Order;
