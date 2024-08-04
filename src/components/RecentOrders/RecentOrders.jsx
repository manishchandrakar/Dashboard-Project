// src/components/RecentOrders/RecentOrders.js
import React from 'react';
import './RecentOrders.css';

const orders = [
  { id: 15478256, customer: 'Wade Warren', amount: 124.00, status: 'Delivered' },
  { id: 48965786, customer: 'Jane Cooper', amount: 365.02, status: 'Delivered' },
  { id: 78958215, customer: 'Guy Hawkins', amount: 45.88, status: 'Cancelled' },
  { id: 20965732, customer: 'Kristin Watson', amount: 85.00, status: 'Pending' },
  { id: 95715620, customer: 'Cody Fisher', amount: 545.00, status: 'Delivered' },
  { id: 78514568, customer: 'Savannah Nguyen', amount: 128.20, status: 'Delivered' },
];

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.customer}</td>
              <td>{order.id}</td>
              <td>${order.amount.toFixed(2)}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;