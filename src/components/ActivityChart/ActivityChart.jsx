// src/components/ActivityChart/ActivityChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './ActivityChart.css';

const data = [
  { name: '5', value: 8000 },
  { name: '7', value: 3000 },
  { name: '9', value: 4000 },
  { name: '11', value: 3500 },
  { name: '13', value: 5000 },
  { name: '15', value: 4500 },
  { name: '17', value: 6000 },
  { name: '19', value: 7500 },
  { name: '21', value: 9000 },
  { name: '23', value: 8500 },
  { name: '25', value: 6500 },
  { name: '27', value: 5500 },
];

const ActivityChart = () => {
  return (
    <div className="activity-chart">
      <div className="chart-header">
        <h2>Activity</h2>
        <select>
          <option>Weekly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#4285F4" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;