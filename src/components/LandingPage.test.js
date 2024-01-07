// LandingPage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('renders landing page with correct content', () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );

    expect(screen.getByText(/welcome to ipo market web/i)).toBeInTheDocument();
    expect(screen.getByText(/cutting-edge ipo trading app/i)).toBeInTheDocument();
    expect(screen.getByText(/get started today and take control of your investments/i)).toBeInTheDocument();
  });

});
