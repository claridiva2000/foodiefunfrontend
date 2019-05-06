import React from 'react'
import LoginForm from './LoginForm';
import logooffwhite from '../assets/logooffwhite.svg';
import forkClear from '../assets/forkClear.png';
import '../App.css';


function Login(props) {                                 
  return (
    <div style={bglogin} >
      <img src={logooffwhite} alt="" style={logo} className='App-logo'/>
      <h3>Welcome to FoodieFun!!</h3>
      <LoginForm history={props.history} />
      <div className='forkbox'>
    
     </div>
     <img src={forkClear} alt=''fork style={fork}/>
    </div>
  )
}

export default Login;

const logo ={
  width: '200px',
  marginTop: '28px',
}
const bglogin ={
  backgroundColor: '#75B207',
  height: '900px'
}

const fork ={
  transform:' rotate(0deg)',
  position: 'relative',
  top: '-10px',
  right: '10px',
  filter:' drop-shadow(-1px 3px 3px rgba(35, 42, 52, 1))',
  width: '110%'
}

