// CurrencyExchangeCard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrencyExchangeCard from './CurrencyExchangeCard';

describe('CurrencyExchangeCard', () => {
  const testProps = {
    symbol: 'USDCAD',
    rate: 1.33618,
    timestamp: 1704491997347,
  };

  it('renders currency exchange card with correct content', () => {
    render(<CurrencyExchangeCard {...testProps} />);

    expect(screen.getByText(/usdcad/i)).toBeInTheDocument();
    expect(screen.getByText(/rate:/i)).toHaveTextContent('1.33618');
    expect(screen.getByText(/last updated:/i)).toBeInTheDocument();
  });

});
