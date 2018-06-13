import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser, faUnlock } from '@fortawesome/fontawesome-free-solid';
import './LoginForm.css';
import client from '../../modules/httpClient';
import Alert from '../common/Alert';

class Login extends Component {
    
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            showAlert: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleSubmit(event) {
        client.post('api/login', { username: this.state.username, password: this.state.password })
        .then((res) => {
            console.log(res.data.token);
        })
        .catch((err) => {
            this.setState({
                showAlert: err.response.data.error
            })
        })

        event.preventDefault();
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div>
                { this.state.showAlert ? <Alert text={this.state.showAlert} /> : null }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"> 
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"> 
                                    <FontAwesomeIcon icon={faUnlock} />
                                </div>
                            </div>
                            <input 
                                type="password" 
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                        </div>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-dark btn-block">Login</button>
                </form>

                <div className="d-flex justify-content-center">
                    <a href="">Esqueci minha senha</a>
                </div>
            </div>
        );
    }
}

export default Login;
