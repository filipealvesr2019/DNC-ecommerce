import React from 'react'
import "./index.scss"
const Header = () => {
  return (
    <div className='header'>
        <img className='header__img' src="logo.png" alt="dnc logo" />
        <div className='header__text'>
          <p className='header__paragraph'></p>
        </div>
    </div>
  )
}

export default Header
