import React from 'react';
import './ProgressBar.scss';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

function Progress() {
  
  const progressBarStyles = {
    // Define your styles here
    path: {
      stroke: 'rgb(3, 22, 187)',
    },
    trail: {
      stroke: '#ecedf0',
    },
    text: {
      fill: '#6b778c',
      fontSize: '25px',
      
    },
  };

  return (
    <div className="ProgressBar">
      <div className='top'>
        <div className="title">
          <h2>Customers</h2>
        </div>
        <p>Customers that buy products</p>
      </div>
      <div className='bottom'>
        <div className='pb'>
          <div className='progress-container' style={{ position: 'relative' }}>
            <CircularProgressbar
              value={65}
              text="65%"
              styles={progressBarStyles}
            />
            <p style={{ fontSize: '12px', position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)' }}>Total New Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
