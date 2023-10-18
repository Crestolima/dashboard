import React from 'react';
import './Home.scss';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Widget from '../components/widget/Widget';
import Progress from '../components/ProgressBar/Progress';
import Barchart from '../components/barchart/Barchart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Table from '../components/table/Table';


function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='earning' colors={['#90EE90']} />
          <Widget type='orders' colors={['#FFB6C1']} />
          <Widget type='balance' colors={['#ADD8E6']} />
          <Widget type='total sales' colors={['#FFC0CB']} />
        </div>
        <div className='charts'>
          <Barchart />
          <Progress />
        </div>
        <div className='listConatiner'>
          <div className='a2'>
            <div className='listTitle'>
              <h2>Product Sell</h2>
            </div>
            <div className='search-and-select'>
              <div className='search'>
                <SearchOutlinedIcon />
                <input type='text' placeholder='Search...' />
              </div>
              <select className='chart-dropdown'>
                <option value='monthly'>Last 30 Days</option>
                <option value='quarterly'>Last 10 Days</option>
              </select>
            </div>
          
            </div>

          <Table/>
        </div>
      </div>
    </div>
  );
}

export default Home;