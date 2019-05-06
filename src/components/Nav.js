import React from 'react';
import foodiefunlogored from  '../assets/foodiefunlogored.svg';
import NavLeft from './NavLeft';
import NavRight from './NavRight'
import '../index.css'

function Nav() {
  return (
    <div style={navStyle}>
     <NavLeft/>
      <img src={foodiefunlogored} alt="main logo" style={logoStyle}/>
      <NavRight/>
    </div>
  )
}

export default Nav

const navStyle ={
  backgroundColor: '#F1F3D7',
  margin: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
  padding: '10px',
  filter: 'drop-shadow(0px 3px 3px rgba(0, 0, 0, 1))',
}

const logoStyle = {
  width: '140px',
  filter: 'drop-shadow(0px 1px 1px rgba(241, 243, 215, 1))'
}