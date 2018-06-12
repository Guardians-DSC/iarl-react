import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser, faUnlock } from '@fortawesome/fontawesome-free-solid';
import './LoginForm.css';
import client from '../modules/httpClient';

class Login extends Component {
    
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        client.post('api/login', { username: 'daniel', password: 'pass' })
        .then((res) => {
            console.log(res.data.token);
        })
        .catch((res) => {
            if (res.data) {
                console.log(res.data.error);
            } else {
                console.log("Invalid server");
            }
        })

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    { this.state.username }
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

                    <button onClick={this.handleClick} className="btn btn-dark btn-block">Login</button>
                </form>

                <div className="d-flex justify-content-center">
                    <a href="#">Esqueci minha senha</a>
                </div>
            </div>
        );
    }
}

export default Login;
