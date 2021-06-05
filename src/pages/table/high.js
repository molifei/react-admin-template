import React, {Component} from 'react';
import {Space, Card, Table, Modal} from 'antd'

import api from '@/api';

class High extends Component {

  state = {
    currentPage: 1,
    pageSize: 10,
    columns: [
      {
        title: '序号',
        dataIndex: 'index',
        width: 150,
        fixed: 'left',
        render: (text, record, index) => (this.state.currentPage - 1) * (this.state.pageSize) + (index + 1)
      },
      {
        title: '姓名',
        dataIndex: 'userName',
        width: 150,
        key: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        width: 150,
        key: 'id',
        render: (text) => text === 1 ? '男' : '女'
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'id',
        width: 150,
        render: (text) => {
          let options = {
            1: '吃饭中',
            2: '玩耍中',
            3: '瞌睡中',
            4: '无聊中'
          }
          return options[text]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        width: 150,
        key: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address',
        width: 150,
        key: 'address'
      },
      {
        title: '时间',
        dataIndex: 'time',
        fixed: 'right',
        width: 100,
        key: 'time'
      }
    ],
    dataSource: [],
    selectedRowKeys: ['5048891'],
    selectedList: []
  }

  async componentDidMount() {
    const res = await api.table.getTableList()

    // console.log(res)

    if (res.data.status) {
      this.setState({
        dataSource: res.data.data
      })
    }
  }

  pagination = {
    onChange: (page, pageSize) => {
      this.setState({
        currentPage: page,
        pageSize
      })
    }
  }

  rowSelection = {
    type: 'checkbox',
    selectedRowKeys: this.state.selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows)
      this.setState({
        selectedRowKeys,
        selectedList: selectedRows
      })
    }
  }

  onRow = (record, index) => {
    return {
      onClick: (event) => {
        // console.log([record.id])
        // // Modal.info({
        // //   title: record.id,
        // //   content: JSON.stringify(record)
        // // })
        // this.setState({
        //   selectedRowKeys: [record.id],
        //   row: record
        // })

        this.selectRow(record)

      }
    }
  }

  selectRow = (record) => {
    const {selectedRowKeys} = this.state

    // 判断有无id
    if (selectedRowKeys.indexOf(record.id) >= 0) {
      // 有则替换
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.id), 1);
    } else {
      // 无则添加
      selectedRowKeys.push(record.id);
    }
    this.setState({selectedRowKeys});
  }

  render() {

    return (
      <>
        <Space direction="vertical">
          <Card title="头部固定">
            <Table
              rowKey={(record) => `${record.id}`}
              dataSource={this.state.dataSource}
              columns={this.state.columns}
              pagination={this.pagination}
              scroll={{y: 500}}
            />
          </Card>
          <Card title="左侧固定">
            <Table
              rowKey={(record) => `${record.id}`}
              dataSource={this.state.dataSource}
              columns={this.state.columns}
              pagination={this.pagination}
              scroll={{x: 1500}}
            />
          </Card>
        </Space>
      </>
    );
  }
}

export default High;
