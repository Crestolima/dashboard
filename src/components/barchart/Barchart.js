import React, { useEffect, useRef, useState } from 'react';
import "./barchart.scss";
import Chart from 'chart.js/auto';

function Barchart() {
  const chartRef = useRef(null);
  const [view, setView] = useState('monthly'); // State for the selected view

  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Earnings',
        data: [2000, 3000, 2500, 3500, 4000, 2800, 4500,1000,2000,3000,1000,5000],
        backgroundColor: 'rgba(255, 228, 181, 0.5)',
        hoverBackgroundColor: 'rgba(128, 0, 0, 0.5)',
        borderWidth: 0,
      },
    ],
  };

  const quarterlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Quarterly Earnings',
        data: monthlyData.datasets[0].data.map(value => value / 4),
        backgroundColor: 'rgba(255, 228, 181, 0.5)',
        hoverBackgroundColor: 'rgba(128, 0, 0, 0.5)',
        borderWidth: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
        beginAtZero: false, // Remove the x-axis line starting from 0
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  
  
  
  

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const context = chartRef.current.getContext('2d');
      const dataToUse = view === 'monthly' ? monthlyData : quarterlyData;
      const newChart = new Chart(context, {
        type: 'bar',
        data: dataToUse,
        options: options,
      });

      return () => {
        newChart.destroy();
      };
    }
  }, [view]);

  return (
    <div className='barchart'>
    <div className='al'><h2>Overview</h2><select
    className="chart-dropdown"
    style={{ outline: 'none', backgroundColor: 'white' }}
    onChange={(e) => setView(e.target.value)}
  >
    <option value="monthly">Monthly</option>
    <option value="quarterly">Quarterly</option>
  </select></div>
  <div className='jc'>Monthly Earnings</div>
      
      
      <div className="chart1" style={{ height: '350px' }}>
        <canvas ref={chartRef}></canvas>
        
      </div>
    </div>
  );
}

export default Barchart;
