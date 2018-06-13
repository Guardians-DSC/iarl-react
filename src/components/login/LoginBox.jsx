import React from 'react';
import logo from '../../images/guardians-logo.png';
import './LoginBox.css';
import LoginForm from './LoginForm';

export default () => {
    return (
        <div className="LoginBox">
            <div className="row d-flex justify-content-center">
                <img src={logo} alt="" className="img-fluid" />
            </div>
            <div className="row">
                <LoginForm />
            </div>
        </div>
    );
}
