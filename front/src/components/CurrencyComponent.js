import React, { useState, useEffect } from 'react';
import { getAllCurrencies } from '../utils/cryptorankAPI';

function CurrencyComponent() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    getAllCurrencies()
      .then((response) => {
        setCurrencies(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching all currencies:', error);
      });
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md h-96 overflow-y-scroll my-11">
      <h2 className="text-3xl font-semibold mb-4">List of Currencies</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-6 py-3">Currency Name</th>
              <th className="px-6 py-3">Symbol</th>
              <th className="px-6 py-3">Price in USD</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency) => (
              <tr key={currency.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{currency.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{currency.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap">${currency.values.USD.price}</td>
                {/* Add more data cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CurrencyComponent;
