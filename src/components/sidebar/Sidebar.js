import React from 'react';
import './Sidebar.scss';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import DownloadingIcon from '@mui/icons-material/Downloading';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Paper, Avatar, AvatarGroup, Box, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <DashboardCustomizeRoundedIcon className="icon1" />
        <span className="logo">Dashboard</span>
      </div>
      <div className="center">
        <ul className="your-ul-class">
          <li>
            <GridViewRoundedIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Product</span>
          </li>
          <li>
            <PortraitOutlinedIcon className="icon" />
            <span>Customers</span>
          </li>
          <li>
            <DownloadingIcon className="icon" />
            <span>Income</span>
          </li>
          <li>
            <TrendingUpIcon className="icon" />
            <span>Promote</span>
          </li>
          <li>
            <ContactSupportOutlinedIcon className="icon" />
            <span>Help</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
      <div className='boxarea'>
      
  <div className='bx1'><Avatar className='av1' alt="Cresto" src="./images/3.png" /></div><div className='bx2'><h5>Cresto</h5><p>Project Manager</p></div>
  <div className='bx3'><ArrowDownwardIcon className='dicon'/></div>
  

  </div>
      </div>
    </div>
  );
}

export default Sidebar;
