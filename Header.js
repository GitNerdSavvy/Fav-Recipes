import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'

function Header() {
  return (

<header className='header' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1192&q=80)` }}>
        <div className='layer'>
        <div className="container">
          <nav className='logo-wrapper'>
            <div className='logo'>
              <ImSpoonKnife className='brand' />
            </div>
          </nav>
          <div className='header-text' >
            <h1>Get Your Recipes here!</h1>
            <p>Let's try some new recipes in your kitchen, Today!</p>
          </div>

        </div>
        </div>
      </header>
  )
}

export default Header