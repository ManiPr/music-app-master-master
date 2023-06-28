import React from 'react'
import {Link} from 'react-router-dom'
import './BrowseMenu.css'
export default function BrowseMenu() {
  return (
    <div className='browse-menus center'>
        <Link className='browse-menu' to='/browse'>Genres & Moods</Link>
        <Link className='browse-menu' to='/NewReleases'>New Releases</Link>
        <Link className='browse-menu' to='/Podcasts'>Podcasts</Link>
        </div>
  )
}
