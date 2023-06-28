import React from 'react'
import user from './../../assets/images/SVG File/Profle 30.svg'
import dash from './../../assets/images/SVG File/Path 690.svg'
import logo from './../../assets/images/SVG File/Full Logo.svg'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

import './Nav.css'
export default function Nav() {
  let location=useLocation()

  return (
    <nav className='nav'>
        <div className='container'>
            <div className='nav__wrapper center'>
              <div className='nav__left center'>
                <img className='nav__logo' src={logo}/>
                <ul className='nav__menus center'>
                  <Link className='nav__menu' to='/browse'>Browse</Link>
                  <Link className='nav__menu'>Library</Link>
                  <Link className='nav__menu'>Home</Link>
                </ul>
              </div>
              {location.pathname==='/browse'&&
               <div className='browse-menus center'>
               <Link className='browse-menu' to='/browse'>Genres & Moods</Link>
               <Link className='browse-menu' to='/NewReleases'>New Releases</Link>
               <Link className='browse-menu' to='/Podcasts'>Podcasts</Link>
             </div>
             }
             <div className='nav__right center'>
                <input type='text' className='nav__serch' placeholder='Search'/>
                <div className='nav__personal center'>
                  <img src={user}></img>
                  <p className='nav__user-name'>ManiFanei</p>
                  <img className='nav__dahs' src={dash}></img>
                </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
