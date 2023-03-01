import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
// import "../components/global.css"

const Nav = () => {
  return (
    <div className='navbar'>
        <Logo />
        <Menu />
    </div>
  )
}

export default Nav