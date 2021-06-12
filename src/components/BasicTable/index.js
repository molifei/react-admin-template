import React, {forwardRef} from 'react';
import {Table} from 'antd'

const {useState, useEffect} = React

const BasicTable = forwardRef((props, ref) => {

  useEffect(() => {
    initTable()
  }, [])

  const initTable = () => {
    // 取到选择框配置
    let rowSelection = props.rowSelection
    console.log(rowSelection)

    // 定义选择框配置
    let rowSelectionConfig = {
      type: 'radio',
      
    }

  }

  return (
    <Table
      {...props.rowSelection}
      onRow={props.onRow}
      bordered
      scroll={{y: 500}}
      loading={props.tableLoading}
      columns={props.columns}
      dataSource={props.dataSource}
      rowKey={r => r.id}
    >
      表格
    </Table>
  )
})


export default BasicTable;