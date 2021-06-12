import React, {forwardRef} from 'react';
import {Form, Input, Select, Button, Checkbox, Radio, DatePicker} from 'antd'

import {isEmpty} from 'lodash'

const {Item} = Form

const {Option} = Select

const {RangePicker} = DatePicker;

const BasicForm = forwardRef((props, ref) => {

  const initForm = () => {
    const {formList} = props

    if (isEmpty(formList) || !Array.isArray(formList)) {
      throw new Error('formList错误')
    }

    // 接收组件的数组
    let itemList = []

    formList.forEach((item, index) => {
      let {type, label, field, initialValue, placeholder, width} = item

      switch (type) {
      case 'INPUT': {
        const INPUT =
          <Item label={label} name={field} key={field}>
            <Input/>
          </Item>
        itemList.push(INPUT)
      }
        break
      case 'SELECT': {
        const SELECT =
          <Item label={label} name={field} key={field}>
            <Select placeholder={placeholder} style={{width, marginBottom: 8}}>
              {
                item.list.map(option => {
                  return <Option value={option.value} key={option.id}>{option.label}</Option>
                })
              }
            </Select>
          </Item>

        itemList.push(SELECT)
      }
        break
      case 'RANGEPICKER': {
        const RANGEPICKER =
          <Form.Item name={field} label={label} style={{width, marginBottom: 8}}>
            <RangePicker showTime/>
          </Form.Item>
        itemList.push(RANGEPICKER)
      }
        break
      case 'CHECKBOX': {
        const CHECKBOX =
          <Item label={label} name={field} key={field}>
            <Checkbox checked={initialValue} disabled={item.disabled}>{label}</Checkbox>
          </Item>

        itemList.push(CHECKBOX)
      }
        break
      }
    })

    // 返回组件
    return itemList

  }

  const resetForm = () => {
    props.resetForm()
    // setFormData({})
  }

  const getFormData = (val) => {
    console.log(val)
    props.getFormData(val)
  }

  return (
    <Form
      ref={ref}
      layout="inline"
      onFinish={getFormData}
    >
      {
        initForm().map(item => {
          return item
        })
      }
      <Item>
        <Button type="primary" htmlType="submit">SEARCH</Button>
      </Item>
      <Item>
        <Button onClick={resetForm}>RESET</Button>
      </Item>
    </Form>
  )
})

export default BasicForm;
