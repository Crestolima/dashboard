import React from 'react';
import './Table.scss';
import { Divider } from '@mui/material';

function Table() {
  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
            
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>
              <div className="product-info">
                <div className="product-image">
                  <img src="./images/1.jpg" alt="Product Image" />
                </div>
                <div className="product-details">
                  <h3>Abstract 3D</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </td>
            <td>32 in Stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>
          <tr>
            <td>
              <div className="product-info">
                <div className="product-image">
                  <img src="./images/2.jpg" alt="Product Image" />
                </div>
                <div className="product-details">
                  <h3>Sharphens Illustration</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </td>
            <td>32 in Stock</td>
            <td>$45.99</td>
            <td>20</td>
          </tr>
          {/* Add more product rows here as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
