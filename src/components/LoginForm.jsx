import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUser, faUnlock } from '@fortawesome/fontawesome-free-solid'
import './LoginForm.css'

class Login extends Component {
    
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };
    }
    
    render() {
        return (
            <div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"> 
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"> 
                                <FontAwesomeIcon icon={faUnlock} />
                            </div>
                        </div>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                </div>

                <button className="btn btn-dark btn-block">Login</button>
                
                <div className="d-flex justify-content-center">
                    <a href="#">Esqueci minha senha</a>
                </div>
            </div>
        );
    }
}

export default Login;
