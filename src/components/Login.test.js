// Login.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import { AuthProvider } from '../context/AuthContext'; // Assuming you have an AuthProvider

describe('Login Component', () => {
  it('renders the Login form correctly', () => {
    render(
      <Router>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </Router>
    );

    // Check if form elements are rendered
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('submits the form and redirects to dashboard on successful login', async () => {
    render(
      <Router>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </Router>
    );

    // Fill out the form
    userEvent.type(screen.getByLabelText(/username/i), 'omprakash');
    userEvent.type(screen.getByLabelText(/password/i), 'om');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Wait for the login to complete
    await waitFor(() => {
      // Check if it redirects to the dashboard page
      expect(window.location.pathname).toEqual('/dashboard');
    });
  });

  it('displays an error message on invalid login attempt', async () => {
    render(
      <Router>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </Router>
    );

    // Fill out the form with invalid credentials
    userEvent.type(screen.getByLabelText(/username/i), 'invaliduser');
    userEvent.type(screen.getByLabelText(/password/i), 'invalidpassword');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Wait for the error message to appear
    await waitFor(() => {
      // Check if the error message is displayed
      expect(screen.getByText(/invalid username or password/i)).toBeInTheDocument();
    });
  });
});
