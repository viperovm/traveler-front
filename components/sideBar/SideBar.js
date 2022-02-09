import { useState, useEffect } from 'react'
import Nav from './Nav'
import Promo from './Promo'
import Social from './Social'

const SideBar = ({ status }) => {
  return (
    <>
      <aside className='aside'>
        <nav className='navigation account-sidebar-menu '>
          <Nav status={status} />
        </nav>
        <Promo />
        <Social />
      </aside>
    </>
  )
}

export default SideBar
