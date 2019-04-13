import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser, faUnlock } from '@fortawesome/fontawesome-free-solid';
import './LoginForm.css';
import client from '../../modules/httpClient';
import { withAlert } from 'react-alert'

class Login extends Component {
    
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
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
            this.props.alert.show(err.response.data.error, { type: 'error' });
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

                    <Button onClick={this.handleClick} variant="contained" color="primary" className="btn-block">Login</Button>
                </form>

                <div className="d-flex justify-content-center">
                    <a href="">Esqueci minha senha</a>
                </div>
            </div>
        );
    }
}

export default withAlert(Login);
