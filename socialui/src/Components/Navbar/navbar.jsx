import React, { useState } from 'react';
import '../Navbar/navbar.scss';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebar,setIsSidebar]=useState(true);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  const handleSidebarToggle = () => {      
    setIsSidebar(!isSidebar);
  };
  return (
    <>
      <div className="topbar">
        <div className="left">
          <NavLink to="/">HiveHub AI</NavLink>
        </div>
        <div className="right">
          <div className="card-left">
            <AppsOutlinedIcon onClick={handleSidebarToggle} />
          </div>
          <div className="card-right">
            <DarkModeIcon  onClick={handleToggleDarkMode} />
            <EmailOutlinedIcon />
            <NotificationsNoneOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
