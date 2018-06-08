import React, { Component } from 'react';

export default class Auth extends Component {
  render() {
    const { login, logout, changeEmail, changePassword } = this.props;

    login();
    
    return (
      <div>
        AUTH
      </div>
    );
  }
};
