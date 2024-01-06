// CurrencyExchange.js
import React, { useState, useEffect } from 'react';
import CurrencyExchangeCard from './CurrencyExchangeCard';
import './CurrencyExchange.css'; // Import a CSS file for styling, you can create this file

const CurrencyExchange = () => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = 'https://api.iex.cloud/v1';
  const token = 'pk_426dcba32a6848019e70d304cfadbf3f'; 
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${baseUrl}/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${token}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setExchangeRates(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, [token]);

  return (
    <div className="currency-container">
      <h1 align="center" >Currency Exchange Rates</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {exchangeRates && (
        <div className="currency-cards-container">
          {exchangeRates.map(({ symbol, rate, timestamp }) => (
            <CurrencyExchangeCard
              key={symbol}
              symbol={symbol}
              rate={rate}
              timestamp={timestamp}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyExchange;
