import React, { Component } from 'react';
import { Space, Card, Table, Modal } from 'antd'

import ajax from '@/api'

class Basic extends Component {

  state = {
    currentPage: 1,
    pageSize: 10,
    columns2: [
      {
        title: '序号',
        dataIndex: 'index',
        render: (text, record, index) => (this.state.currentPage - 1) * (this.state.pageSize) + (index + 1)
      },
      {
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'id',
        render: (text) => text === 1 ? '男' : '女'
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'id',
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
        key: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '时间',
        dataIndex: 'time',
        key: 'time'
      }
    ],
    dataSource2: [],
    selectedRowKeys: ['5048891'],
    selectedList: []
  }

  async componentDidMount() {
    const res = await ajax({
      url: '/table/list'
    })

    // console.log(res)

    if (res.data.status) {
      this.setState({
        dataSource2: res.data.data
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
    const { selectedRowKeys } = this.state

    // 判断有无id
    if (selectedRowKeys.indexOf(record.id) >= 0) {
      // 有则替换
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.id), 1);
    } else {
      // 无则添加
      selectedRowKeys.push(record.id);
    }
    this.setState({ selectedRowKeys });
  }

  render() {

    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }
    ];

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      }
    ];

    return (
      <>
        <Space direction="vertical">
          <Card title="基础表格">
            <Table dataSource={dataSource} columns={columns} />
          </Card>
          <Card title="动态表格">
            <Table
              rowKey={(record) => `${record.id}`}
              dataSource={this.state.dataSource2}
              columns={this.state.columns2}
              pagination={this.pagination}
              scroll={{ y: 500 }}
            />
          </Card>
          <Card title="单选框表格">
            <Table
              rowKey={(record) => `${record.id}`}
              dataSource={this.state.dataSource2}
              columns={this.state.columns2}
              pagination={this.pagination}
              rowSelection={this.rowSelection}
              onRow={this.onRow}
            />
          </Card>
        </Space>
      </>
    );
  }
}

export default Basic;
