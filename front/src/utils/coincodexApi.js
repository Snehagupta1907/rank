import { coincodexAxiosInstance } from "./axiosInstance";

export const getAllCoins = () => {
  const endpoint = "/apps/coincodex/cache/all_coins.json";
  return coincodexAxiosInstance.get(endpoint);
};

export const getFirstPageHistory = (days, samples, coinsLimit) => {
  const endpoint = `/api/coincodex/get_firstpage_history/${days}/${samples}/${coinsLimit}`;
  return coincodexAxiosInstance.get(endpoint);
};

export const getCoin = (symbol) => {
  const endpoint = `/api/coincodex/get_coin/${symbol}`;
  return coincodexAxiosInstance.get(endpoint);
};

export const getCoinHistory = (symbol, startDate, endDate, samples) => {
  const endpoint = `/api/coincodex/get_coin_history/${symbol}/${startDate}/${endDate}/${samples}`;
  return coincodexAxiosInstance.get(endpoint);
};

export const getCoinMarkets = (symbol) => {
  const endpoint = `/api/exchange/get_markets_by_coin/${symbol}`;
  return coincodexAxiosInstance.get(endpoint);
};
