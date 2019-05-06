import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { register } from './AxiosLogin';
import '../App.css';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    register(newUser).then(res => {
      this.props.history.push('/login');
    });
  };

 

  render() {
    const { errors } = this.state;
    return (
     
      <div className="register">
        <h4>Registration</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
            style={inputStyle}
              type="text"
              placeholder="Username"
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
           
          <div className="form-group">
            <input
            style={inputStyle}
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
           
          </div>
          <div className="form-group">
            <button type="submit" style={buttonStyle}>
              Register User
            </button>
            <Link to='/login'><button style={buttonStyle}>Cancel</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { register }
)(withRouter(Register));

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
cursor: 'pointer',
}