import React, { useEffect, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
    console.log(data);
    return <div>
        <h1 className="mt-24 font-bold text-4xl text-violet-500  ">Visualized <span className="text-gray-600">Data</span></h1>
         <div className="grid sm:grid-cols-2 grid-cols-1 mr-26 ml-28 gap-12 mt-24 mb-24">
      
      <div >
      <LineChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey={'investment'} />
        <Tooltip  />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="#8884d8"  />
        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
      </LineChart>
      </div>
      <div>
          <BarChart width={500} height={400} data={data}>
              <Tooltip />
              <Legend></Legend>
              <XAxis dataKey={'month'}></XAxis>
              
        <Bar dataKey="investment" fill="#8884d8" />
      </BarChart>
      </div>
      <div>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey={'investment'} />
        <Tooltip />
        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      </div>
      <div>
          <PieChart width={400} height={400}>
              <Tooltip></Tooltip>
              <Legend></Legend>
        <Pie
          dataKey="revenue"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="80%"
          outerRadius={200}
          fill="#8884d8"
          label
        />
      </PieChart>
      </div>
    
</div>
    </div>;
};

export default Dashboard;
