import React from 'react';
import './Navbar.css';

function NavbarOption({Icon,title}) {
  return (
    <div className='item'>
        <a className='icon'>{Icon}</a>
        <p className='navbarTitle'>{title}</p>
    </div>
  )
}

export default NavbarOption