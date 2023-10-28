import React, { useEffect } from 'react';
import { getAllCoins, getFirstPageHistory, getCoin, getCoinHistory, getCoinMarkets } from '../utils/coincodexApi'; 


const CoinData = () => {
  useEffect(() => {

    getAllCoins()
      .then((response) => {
        console.log('All Coins:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching all coins:', error);
      });


    getFirstPageHistory(30, 10, 30) 
      .then((response) => {
        console.log('First Page History:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching first page history:', error);
      });


    getCoin('BTC')
      .then((response) => {
        console.log('BTC Coin Properties:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching BTC coin properties:', error);
      });

  
    getCoinHistory('BTC', '2022-01-01', '2022-12-31', 10) 
      .then((response) => {
        console.log('BTC Coin History:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching BTC coin history:', error);
      });

    getCoinMarkets('BTC')
      .then((response) => {
        console.log('BTC Coin Markets:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching BTC coin markets:', error);
      });
  }, []);

  return <div>Data fetching from CoinCodex API...</div>;
};

export default CoinData;
