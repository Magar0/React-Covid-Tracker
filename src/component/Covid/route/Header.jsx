import React from 'react'
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import { Link, NavLink } from 'react-router-dom';
// import Main from "./Main"


const Header = () => {
  return (
    <>
      <header className='bg-warning p-2 d-flex'>
        <CoronavirusIcon fontSize='large' className='my-auto mx-2' />
        {/* <img src="./image/logo.png" alt="logo" height={"40px"} width={"80px"} className='rounded-circle   '/> */}
        <h3 className='text-uppercase my-auto ms-3' >covid tracker</h3>

        <div className="navbar ms-auto">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/statewise'>Statewise</NavLink>
        </div>

      </header>
    </>
  )
}

export default Header