import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElement'


function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to='/' >
          <h1>Logo</h1>
          {/* <img src={require('../../images/logo.svg')} alt=""/> */}
          </NavLink>
          <Bars />
          <NavMenu >
          <NavLink to='/about' activeStyle>
              About
          </NavLink>
          <NavLink to='/services' activeStyle>
              Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
              Contact us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
              Sign Up
          </NavLink>
          {/* 2nd nav */}
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign in</NavBtnLink>
          </NavBtn> */}
      </Nav>
    </>
  )
}

export default Navbar;
