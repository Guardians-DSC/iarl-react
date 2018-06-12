import React, {Component} from 'react'
import logo from '../images/guardians-logo.png'
import './LoginBox.css'

class Box extends Component {
    render() {
        return (
            <div className="LoginBox">
                <img src={logo} alt="" className="img-fluid" />
            </div>
        );
    }
}

export default Box;
