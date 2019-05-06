import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../index.css';

class NavBottom extends Component {
logOut(e){
  e.preventDefault();
  localStorage.removeItem('usertoken')
  this.props.history.push('/')
  console.log('logged out')
}


render() {
   return(
    <div className='bottomnav' >
    <Link to='/'> <i className="fas fa-home"></i></Link>
    <Link to='/add-new'> <i className="fas fa-plus-circle"></i></Link>
    <Link to='/login'> <i className="fas fa-sign-out-alt" ></i></Link>
   </div>

   )
 }
}

export default NavBottom



