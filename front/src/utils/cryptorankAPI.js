import { axiosInstance } from './axiosInstance'; 


const apiKey = '5f4bdd96bb7f740aabfe54222b00bcadff0b14395526bb75728045693ff0';


export const getAllExchanges = () => {
  const endpoint = '/exchanges';
  return axiosInstance.get(endpoint, { params: { api_key: apiKey } });
};


export const getExchangeById = (exchangeId) => {
  const endpoint = `/exchanges/${exchangeId}`;
  return axiosInstance.get(endpoint, { params: { api_key: apiKey } });
};


export const getAllCurrencies = () => {
  const endpoint = '/currencies';
  return axiosInstance.get(endpoint, {
    params: {
      api_key: apiKey,
      limit: 300, 
    },
  });
};

  export const getCurrencyById = (currencyId) => {
    const endpoint = `/currencies/${currencyId}`;
    return axiosInstance.get(endpoint, { params: { api_key: apiKey } });
  };

 

