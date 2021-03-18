import React, {Component} from 'react';
import {Space, Card, Form, Input, Button, Checkbox} from 'antd'

class Login extends Component {
  render() {
    return (
      <>
        <Space direction="vertical">
          <Card title="行内表单">
            <Form
              layout="inline"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: '请输入名称'}]}
              >
                <Input/>
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: '请输入密码'}]}
              >
                <Input/>
              </Form.Item>

              <Form.Item wrapperCol={{offset: 3, span: 10}}>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Card>
          <Card>
            2
          </Card>
        </Space>
      </>
    );
  }
}

export default Login;