import React from 'react'
import '../Navbar/navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <NavLink to="/">HiveHub</NavLink>
          <HomeOutlinedIcon />
          <DarkModeOutlinedIcon />
          <AppsOutlinedIcon />
          <div className="search">
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search' />
          </div>

        </div>
        <div className="right">
          <AccountCircleOutlinedIcon />
          <EmailOutlinedIcon />
          <NotificationsNoneOutlinedIcon />
          div.
        </div>
      </div>
    </>
  )
}

export default navbar
