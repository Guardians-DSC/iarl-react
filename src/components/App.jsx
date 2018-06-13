import React, { Component } from 'react';
import Login from './login/Login';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const alertOptions = {
  offset: "30px",
  position: "top right",
  timeout: 3000
};

class App extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Login />  
      </AlertProvider>
    );
  }
}

export default App;
