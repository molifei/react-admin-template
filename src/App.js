import React, { Component } from 'react';
import { Spin } from 'antd'

class App extends Component {
  render() {
    return (
      <Spin size="large" spinning={false}>
        {this.props.children}
      </Spin>
    );
  }
}

export default App;
