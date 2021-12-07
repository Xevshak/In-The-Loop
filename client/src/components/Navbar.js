import React from 'react'
import {Link} from 'react-router-dom'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar () {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  document.getElementById("signout").addEventListener("click", function(){ localStorage.removeItem("username"); });
  

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

        <MenuItem  onClick={handleClose}><Link to={`/dashboard`}>Dashboard</Link></MenuItem>
        <MenuItem  onClick={handleClose}><Link to={`/js`}>JavaScript</Link></MenuItem>
        <MenuItem onClick={handleClose}>CSS</MenuItem>
        <MenuItem onClick={handleClose}>HTML</MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/`} id="signout" >Sign Out</Link></MenuItem>
      </Menu>
    </div>
    )
}