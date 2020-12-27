import React from 'react';
import Sidenav from './Sidenav';
import Topnav from './MobileHeader';

const Navbar = (props) => {
  return (
    <div className='nav-container'>
      <Sidenav />
      <Topnav />
    </div>
  )
}

export default Navbar;