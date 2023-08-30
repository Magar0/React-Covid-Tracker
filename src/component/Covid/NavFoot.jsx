import React from 'react'
import Header from './route/Header'
import Footer from './route/Footer'
import { Outlet } from 'react-router-dom'

const NavFoot = () => {
  return (
<>
<Header/>
<Footer/>
<Outlet/>
</>
  )
}

export default NavFoot