import React, { Component } from 'react';

import { login } from './AxiosLogin';
import { connect } from 'react-redux';
// import { login } from '../actions/index';
import { Link } from 'react-router-dom';
import '../App.css';

export class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      errors: {},
      userId: null
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    console.log('login!!');
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    login(user).then(res => {
      if (res) {
        this.props.history.push('/');
      }
    });
  };

  render() {
    return (
      <div>
        <div className="loginform">
          <form onSubmit={this.handleLogin} style={loginform}>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
              style={inputStyle}
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              style={inputStyle}
            />
            <button style={buttonStyle}>Login</button>

            <button style={buttonStyle}>
              <Link to="/register" style={linkStyle}>Create Account</Link>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ error, isLoggingIn }) => ({
  error,
  isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);

const loginform = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '250px',
  margin: 'auto',
  marginTop: '20px'
};

const inputStyle = {
  border: '#232A34 1px solid',
  borderRadius: '5px',
  margin:'2px',
  padding: '10px',
};

const buttonStyle ={
color: '#232A34',
background: '#F1F3D7',
border: '#232A34 1px solid',
borderRadius: '5px',
padding: '10px',
margin: '5px',

}

const linkStyle ={
  textDecoration: 'none',
  color: '#232A34'
}