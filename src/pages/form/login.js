import React, {Component} from 'react';
import {Space, Card, Form, Input, Button, Checkbox} from 'antd'

class Login extends Component {

  formRef = React.createRef()

  submitHandle = (value) => {
    console.log(value);
  }

  resetForm = () => {
    // this.formRef.current.setFieldsValue({
    //   username: '',
    //   password: ''
    // })
    this.formRef.current.resetFields()
  }

  submitFailHandle = (values, errorFields, outOfDate) => {
    console.log(values, errorFields, outOfDate);
  }

  valueChangeHandle = (newValue, allValue) => {
    console.log(newValue, allValue);
  }

  render() {
    return (
      <>
        <Space direction="vertical">
          <Card title="行内表单">
            <Form
              layout="inline"
              ref={this.formRef}
              onFinish={this.submitHandle}
              onFinishFailed={this.submitFailHandle}
              onValuesChange={this.valueChangeHandle}
            >
              <Form.Item
                name="username"
                rules={[{required: true, message: '请输入名称'}]}
              >
                <Input placeholder="请输入名称"/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{required: true, message: '请输入密码'}]}
              >
                <Input placeholder="请输入密码"/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="button" onClick={this.resetForm}>
                  重置
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <Card title="水平表单">
            <Form
              labelCol={{span: 2}}
              wrapperCol={{span: 6}}
              name="basic"
              initialValues={{remember: true, username: '小明'}}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
              >
                <Input.Password/>
              </Form.Item>

              <Form.Item wrapperCol={{span: 8}}>
                <Form.Item style={{display: 'inline-block', width: 'calc(50%)'}} name="remember" valuePropName="checked">
                  <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <Form.Item style={{display: 'inline-block', width: 'calc(50% )'}}>
                  <a href="#!" style={{float: 'right'}} type="link">忘记密码</a>
                </Form.Item>
              </Form.Item>

              <Form.Item wrapperCol={{span: 8}}>
                <Button type="primary" htmlType="submit" block>
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </>
    );
  }
}

export default Login;
