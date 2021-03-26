import React, { Component } from 'react';
import { Card, Form, Input, InputNumber, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, message, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const { Option } = Select
const { TextArea } = Input

class Register extends Component {

  register = React.createRef()

  registerUser = (val) => {
    console.log(val)
    message.success('注册成功')
  }

  registerFail = (values, errorFields, outOfDate) => {
    console.log(values, errorFields, outOfDate)
    message.warn('请填写注册信息')
  }

  resetRegister = () => {
    this.register.current.resetFields()
  }

  render() {
    return (
      <>
        <Card title="注册表单">
          <Form
            ref={this.register}
            wrapperCol={{ span: 10 }}
            labelCol={{ span: 6 }}
            initialValues={{
              userName: ''
            }}
            onFinish={this.registerUser}
            onFinishFailed={this.registerFail}
          >
            <Form.Item label="用户名" name="userName" rules={
              [{
                required: true,
                message: '请输入用户名'
              }]}>
              <Input placeholder="用户名" />
            </Form.Item>

            <Form.Item label="密码" name="password" rules={
              [{
                required: true,
                message: '请输入密码'
              }]}>
              <Input.Password placeholder="密码" />
            </Form.Item>

            <Form.Item label="性别" name="sex" rules={
              [{
                required: true,
                message: '请选择性别'
              }]}>
              <Radio.Group>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="年龄" name="age" rules={
              [{
                required: true,
                message: '请选择年龄'
              }]}>
              <InputNumber placeholder="年龄" min={1} max={200} />
            </Form.Item>

            <Form.Item label="当前状态" name="status" rules={
              [{
                required: true,
                message: '请选择状态'
              }]
            }>
              <Select placeholder="状态">
                <Option value={1}>吃饭中</Option>
                <Option value={2}>玩耍中</Option>
                <Option value={3}>瞌睡中</Option>
                <Option value={4}>无聊中</Option>
              </Select>
            </Form.Item>

            <Form.Item label="爱好" name="love">
              <Select placeholder="爱好" mode="tags">
                <Option value="1">篮球</Option>
                <Option value="2">健身</Option>
                <Option value="3">打游戏</Option>
                <Option value="4">游泳</Option>
                <Option value="5">唱歌</Option>
                <Option value="6">睡觉</Option>
              </Select>
            </Form.Item>

            <Form.Item label="婚姻状况" name="isMarry" valuePropName="checked">
              <Switch />
            </Form.Item>

            <Form.Item label="生日" name="birthday">
              <DatePicker placeholder="生日" format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>

            <Form.Item label="地址" name="address">
              <TextArea rows={4} placeholder="地址" showCount maxLength={100} />
            </Form.Item>

            <Form.Item label="早起时间" name="getUp">
              <TimePicker placeholder="早起时间" />
            </Form.Item>

            <Form.Item label="头像" name="avatar" valuePropName="upload">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              >
                <PlusOutlined /><>上传头像</>
              </Upload>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6 }} name="read" valuePropName="checked">
              <Checkbox>我已经阅读过<a href="#">《 Muscle Admin 使用协议 》</a></Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 10, offset: 6 }}>
              <Button type="primary" htmlType="submit" block style={{ marginBottom: 10 }}>注册</Button>
              <Button block onClick={this.resetRegister}>重置</Button>
            </Form.Item>

          </Form>
        </Card>
      </>
    );
  }
}

export default Register;
