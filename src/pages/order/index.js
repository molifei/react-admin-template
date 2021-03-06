import React from 'react';
import {Space, Card, Button, Table, Form, Select, Modal, message, DatePicker} from 'antd'
import api from '@/api'
import tools from '@/utils/utils'
import {isEmpty} from 'lodash'

// 表单组件
import BasicForm from '@/components/BasicForm'

// 表格组件
import BasicTable from '@/components/BasicTable'

const {Option} = Select
const {RangePicker} = DatePicker;

const Order = () => {

  const [tableLoading, setTableLoading] = React.useState(false)
  const [dataSource, setDataSource] = React.useState([])
  const [formData, setFormData] = React.useState({})
  const [row, setRow] = React.useState([])
  const [rowKey, setRowKey] = React.useState()

  const orderFormRef = React.useRef(null)

  React.useEffect(() => {
    getOrderTable()
  }, [formData])

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

    if (!isEmpty(val)) {
      let formData = val
      formData.startTime = formData.time ? formData.time[0].format('YYYY-MM-DD HH:mm:ss') : ''
      formData.endTime = formData.time ? formData.time[1].format('YYYY-MM-DD HH:mm:ss') : ''
      delete formData.time

      setFormData(formData)
    }
  }

  const getOrderTable = async() => {

    // console.log(formData)

    const res = await api.order.getOrderList({
      params: formData
    })

    if (res.data.status) {
      setDataSource(res.data.data)
    } else {
      setDataSource([])
    }
  }

  const resetForm = () => {
    orderFormRef.current.resetFields()
    setFormData({})
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows)
      setRow(selectedRows)
    },
    getCheckboxProps: (record) => ({
      name: record.id
    })
  };

  const onRow = (record, index) => {
    return {
      onClick: () => {
        console.log(record)
        selectRow(record)
      }
    }
  }

  const selectRow = (record) => {
    setRowKey([record.id])
    setRow([record])
  }

  // 结束订单
  const closeOrder = async() => {
    if (row.length === 0) {
      message.warn('请选择一项')
      return
    }

    const res = await api.order.getCloseOrder({
      id: row[0].orderId
    })

    console.log(res)
    if (res.data.status) {
      message.success('结束订单操作成功')
      getFormData({})
      getOrderTable()
      setRow([])
    } else {
      message.success('结束订单操作失败')
    }

  }

  // 订单详情
  const toOrderDetail = () => {
    if (row.length === 0) {
      message.warn('请选择一项')
      return
    }

    window.open(`/#/link/order/detail/${row[0].id}`, '_blank')

    // window.location.href = `/#/link/order/detail/${row[0].id}`
  }

  // 定义form结构
  const formList = [
    {
      type: 'SELECT',
      label: '城市',
      field: 'city',
      placeholder: '请选择城市',
      width: 140,
      list: [{id: 0, label: '全部', value: ''}, {id: 1, label: '北京', value: 1}, {id: 2, label: '天津', value: 2}]
    },
    {
      type: 'RANGEPICKER',
      label: '时间查询',
      field: 'time',
      placeholder: '',
      width: 300
    },
    {
      type: 'SELECT',
      label: '订单状态',
      field: 'status',
      placeholder: '请选择订单状态',
      initialValue: '',
      width: 140,
      list: [{id: 0, label: '全部', value: ''}, {id: 1, label: '进行中', value: 1}, {id: 2, label: '已结束', value: 2}]
    }
  ]

  return (
    <>
      <Space direction="vertical">
        <Card>
          {/* <FilterForm*/}
          {/*  ref={orderFormRef}*/}
          {/*  getFormData={getFormData}*/}
          {/*  resetForm={resetForm}/>*/}
          <BasicForm
            ref={orderFormRef}
            formList={formList}
            getFormData={getFormData}
            resetForm={resetForm}
          />
        </Card>
        <Card>
          <Space>
            <Button type="primary" onClick={toOrderDetail}>订单详情</Button>
            <Button onClick={closeOrder}>结束订单</Button>
          </Space>
        </Card>
        <Card>
          <BasicTable
            rowSelection={{
              type: 'radio',
              selectedRowKeys: rowKey,
              ...rowSelection
            }}
            onRow={onRow}
            bordered
            scroll={{y: 500}}
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

export default Order;
