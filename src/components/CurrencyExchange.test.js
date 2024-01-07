// CurrencyExchange.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrencyExchange from './CurrencyExchange';

// Mocking the fetch function
beforeAll(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => [
      { symbol: 'USDCAD', rate: 1.33618, timestamp: 1704491997347 },
      { symbol: 'GBPUSD', rate: 1.27182, timestamp: 1704491999097 },
      { symbol: 'USDJPY', rate: 144.622, timestamp: 1704491999098 },
    ],
  });
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe('CurrencyExchange', () => {
  it('renders currency exchange rates', async () => {
    render(<CurrencyExchange />);

    await waitFor(() => {
      expect(screen.getByText(/currency exchange rates/i)).toBeInTheDocument();
      expect(screen.getByText(/usdcad/i)).toBeInTheDocument();
      expect(screen.getByText(/gbpusd/i)).toBeInTheDocument();
      expect(screen.getByText(/usdjpy/i)).toBeInTheDocument();
    });
  });

  it('displays loading message initially', () => {
    render(<CurrencyExchange />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  // You can add more test cases based on your requirements
});
