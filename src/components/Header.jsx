import React from 'react'
import Button from './Button'
import logo from '../assets/Logo.svg'

function Header() {
   return (
      <header className='header'>
         <div className="header__container">
            <img src={logo} alt="" className="header__logo" />
            <ul className="header__buttons">
               <li className="header__button">
                  <Button disabled={false}>Users</Button>
               </li>
               <li className="header__button">
                  <Button disabled={false}>Sing up</Button>
               </li>
            </ul>
         </div>
      </header >
   )
}

export default Header