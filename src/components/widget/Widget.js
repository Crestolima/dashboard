import React from 'react';
import './Widget.scss';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';

const earningsData = ["$198k", "$2.4k", "$2.4k", "$89k"];
const percentagelist = ["37.8%", "2%", "2%", "11%"];
const defaultColors = ['#90EE90', '#FFB6C1', '#ADD8E6', '#FFC0CB'];

function Widget({ type, colors }) {
  let data;
  let backgroundColor;
  switch (type) {
    case 'earning':
      data = {
        ic: <AttachMoneySharpIcon className="ic" />,
        title: 'Earnings',
        m: earningsData[0],
        percentage: percentagelist[0],
        ip: <ArrowUpwardOutlinedIcon className="ic" style={{ color: '#008000' }} />,
      };
      backgroundColor = colors[0] || defaultColors[0];
      break;
    case 'orders':
      data = {
        ic: <AddShoppingCartOutlinedIcon className="ic" style={{ color: '#800080' }} />,
        title: 'Orders',
        m: earningsData[1],
        percentage: (
          <span style={{ color: 'red' }}>{percentagelist[1]}</span>
        ),
        ip: <SouthOutlinedIcon className="ic" style={{ color: 'red' }} />,
      };
      backgroundColor = colors[1] || defaultColors[1];
      break;
    case 'balance':
      data = {
        ic: <AccountBalanceWalletIcon className="ic" style={{ color: '#000080' }} />,
        title: 'Balance',
        m: earningsData[2],
        percentage: percentagelist[2],
        ip: <SouthOutlinedIcon className="ic" style={{ color: 'red' }} />,
      };
      backgroundColor = colors[2] || defaultColors[2];
      break;
    case 'total sales':
      data = {
        ic: <ShoppingBagOutlinedIcon className="ic" style={{ color: '#FF69B4' }} />,
        title: 'Total Sales',
        m: earningsData[3],
        percentage: percentagelist[3],
        ip: <ArrowUpwardOutlinedIcon className="ic" />,
      };
      backgroundColor = colors[3] || defaultColors[3];
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div
        className="left"
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        {data.ic}
      </div>
      <div className="right">
        <span className="title">{data.title}</span>
        <span className="m">{data.m}</span>
        <span className={`percentage ${data.ip.props.style?.color === 'red' ? 'negative' : 'positive'}`}>
          {data.ip}
          {data.percentage} <span className="ig">this month</span>
        </span>
      </div>
    </div>
  );
}

export default Widget;
