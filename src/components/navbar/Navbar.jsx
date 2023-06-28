import React from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg';
import { useState } from 'react'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt">What is GPT?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='mainNavContainer'>
      <div className='navContent'>
        <div className='navlinks'>
          <img src={logo} alt="logo" />
          <div className='navTextLink'>
          < Menu />
          </div>
        </div>
        <div className='navSign'>
          <p><a href="sign in">Sign in</a></p>
          <button>Sign up</button>
        </div>
        <div className='navMenu'>
          {
            toggleMenu 
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false) } />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {
            toggleMenu && (
              <div className='navMenuContainer scale-up-center'>
                <div className='navMenuContainerLinks'>
                  < Menu />
                  <div className='navMenuContainerLinksSign'>
                    <p><a href="sign in">Sign in</a></p>
                    <button>Sign up</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>


    </div>
  )
}

export default Navbar