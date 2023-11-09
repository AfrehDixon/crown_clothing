import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
      <div className='header'>
          <Link className='logo-container' to='/'>
              <h1 className='logo'>Hello</h1>
          </Link>
            <div className='options'>
                <Link className='option' to='/shops'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
              </Link>
                <Link className='option' to='/signin'>
                  SIGN IN
                </Link>
              </div>
              
      
    </div>
  )
}

export default Header
