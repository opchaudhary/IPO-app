// CurrencyExchangeCard.js
import React from 'react';
import './CurrencyExchangeCard.css'; // Import a CSS file for styling, you can create this file

const CurrencyExchangeCard = ({ symbol, rate, timestamp }) => {
  const formattedTimestamp = new Date(timestamp).toLocaleString();

  return (
    <div className="currency-card">
      <h3>{symbol}</h3>
      <p><strong>Rate:</strong> {rate}</p>
      <p><strong>Last Updated:</strong> {formattedTimestamp}</p>
    </div>
  );
};

export default CurrencyExchangeCard;
