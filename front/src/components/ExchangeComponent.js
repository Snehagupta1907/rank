import React, { useState, useEffect } from 'react';
import { getAllExchanges } from '../utils/cryptorankAPI';
import ExchangeVolumeChart from './ExchangeVolumeChart';

function ExchangeComponent() {
  const [exchangeDetails, setExchangeDetails] = useState([]);

  useEffect(() => {
    getAllExchanges()
      .then((response) => {
        setExchangeDetails(response.data.data.slice(0, 10));
      })
      .catch((error) => {
        console.error('Error fetching all exchanges:', error);
      });
  }, []);

  return (
    <div className='flex items-center justify-center'>
    <div className="bg-white p-4 rounded shadow-md w-1/2">
      <ExchangeVolumeChart exchangeData={exchangeDetails} />
    </div>
    </div>
  );
}

export default ExchangeComponent;
