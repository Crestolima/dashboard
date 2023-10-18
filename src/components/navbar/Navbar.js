import React from 'react'
import "./Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const font = {
  fontSize: '24px', // Adjust the size as needed
}

function Navbar() {
  return (
    <div className='navbar'>
    <div className='wrapper'>
    <div className='text1'>
    <h4 style={font}>Hello Cresto Lima 👋,</h4>
    </div>
    <div className='search'>
    <SearchOutlinedIcon/><input type='text' placeholder='Search...'/>
    
    </div>
    </div>
    </div>
  )
}

export default Navbar