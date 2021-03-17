import React, { Component } from 'react';

class Info extends Component {

  render() {
    return (
      <div>
        id是{this.props.match.params.id}
      </div>
    );
  }
}

export default Info;
