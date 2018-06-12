import React, {Component} from 'react';
import './Login.css';
import LoginBox from './LoginBox';

class Login extends Component {
  render() {
    return (
      <div className="Login d-flex align-items-center justify-content-center">
        <LoginBox />
      </div>
    );
  }
}

export default Login;
