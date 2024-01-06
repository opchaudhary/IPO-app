// IPO.js
import React, { useState, useEffect } from 'react';
import './IPO.css'; // Import a CSS file for styling, you can create this file

const IPO = () => {
  const [ipoData, setIpoData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);
  const BaseUrl = 'https://api.iex.cloud/v1';
  const token = 'pk_426dcba32a6848019e70d304cfadbf3f'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${BaseUrl}/data/CORE/UPCOMING_IPOS/market?token=${token}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setIpoData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="ipo-container">
      <h1 align="center">Upcoming IPOs</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {ipoData && ipoData.length > 0 && (
        <div className="ipo-cards-container">
          {ipoData.map((ipo) => (
            <div key={ipo.symbol} className="ipo-card">
              <h3>{ipo.companyName}</h3>
              <p><strong>Symbol:</strong> {ipo.symbol}</p>
              <p><strong>Filing Date:</strong> {ipo.filedDate}</p>
              <p><strong>Offering Date:</strong> {ipo.offeringDate}</p>
              <p><strong>Price Range:</strong> ${ipo.priceRangeLow} - ${ipo.priceRangeHigh}</p>
              <p><strong>Shares:</strong> {ipo.shares}</p>
                  
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IPO;
