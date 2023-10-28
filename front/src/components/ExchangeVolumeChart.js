import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const ExchangeVolumeChart = ({ exchangeData }) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('24h');


  const filteredData = exchangeData.map(exchange => ({
    name: exchange.name,
    volume: exchange.values.USD[`volume${selectedTimeFrame}`],
  }));

  const handleChangeTimeFrame = (timeFrame) => {
    setSelectedTimeFrame(timeFrame);
  };

  return (
    <div className="mt-4 ml-4">
        <h2 className="text-lg font-semibold">Exchange {selectedTimeFrame} Volume Comparison</h2>
      <div className="mb-2">
        <button
          className={`mr-2 ${selectedTimeFrame === '24h' ? 'text-blue-500' : ''}`}
          onClick={() => handleChangeTimeFrame('24h')}
        >
          24h
        </button>
        <button
          className={`mr-2 ${selectedTimeFrame === '7d' ? 'text-blue-500' : ''}`}
          onClick={() => handleChangeTimeFrame('7d')}
        >
          7d
        </button>
        <button
          className={`mr-2 ${selectedTimeFrame === '30d' ? 'text-blue-500' : ''}`}
          onClick={() => handleChangeTimeFrame('30d')}
        >
          30d
        </button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart layout="vertical" data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="volume" fill="#4C51BF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExchangeVolumeChart;
