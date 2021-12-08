import React from 'react'
import {Link} from 'react-router-dom'

import Auth from '../utils/auth';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "../Style/Navbar.css"
export default function Navbar () {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <div>
      <Button
        id="basic-button"
        className="menBtn"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        onStateChange={()=> setAnchorEl(anchorEl)}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {/* <MenuItem  onClick={handleClose}><Link to={`/dashboard`}>Dashboard</Link></MenuItem> */}
        <MenuItem  onClick={handleClose}><Link to={`/js`}>JavaScript</Link></MenuItem>
        <MenuItem onClick={handleClose}>CSS</MenuItem>
        <MenuItem onClick={handleClose}>HTML</MenuItem>
        <MenuItem  onClick={handleClose}><Link to={`/contacts`}>Contact Us</Link></MenuItem>
        <MenuItem  onClick={Auth.logout}><Link to={`/`}>Sign Out</Link></MenuItem>
        {/* need to link to logout function */}
      </Menu>
    </div>
    )
}