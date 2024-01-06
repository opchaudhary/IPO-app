import React, { useState } from 'react';
import './MainDashboard.css';
import IPO from './IPO';
import CurrencyExchange from './CurrencyExchange';

const MainDashboard = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const BaseUrl = 'https://api.iex.cloud/v1';
  const token = 'pk_426dcba32a6848019e70d304cfadbf3f';

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="dashboard">
      <button onClick={handleRefresh}>Refresh</button>

      <div className="dashboard-container">
        <div className="IPO-panel">
          <IPO key={refreshKey} />
        </div>
        <div className="Currency-panel">
          <CurrencyExchange key={refreshKey} />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
