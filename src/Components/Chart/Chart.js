import React from 'react';
import { useLoaderData } from 'react-router-dom';
//import Rechart from './Rechart/Rechart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import "./Chart.css"
const Chart = () => {
    const charts= useLoaderData();
    console.log("anik",charts.data);
    return (
        <div className='chart-container'>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={500} height={400} data={charts.data}>
            
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis  dataKey='name'/>
          <YAxis />
          <Tooltip/>
            </LineChart>
            </ResponsiveContainer>
     
    </div>
    );
};

export default Chart;