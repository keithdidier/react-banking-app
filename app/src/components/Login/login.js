import React, { Component} from 'react';
import './login.css';
import logo from './communityBank.svg';


export default class Login extends Component {

    render() {
        return (
            <div className='App'>
                <img src={logo} alt='logo'/>
                <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
            </div>
        )
    }
}