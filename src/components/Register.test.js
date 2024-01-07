// Register.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from './Register';

// Mock the react-router-dom's Navigate component
jest.mock('react-router-dom', () => ({
  Navigate: jest.fn(({ to }) => <div data-testid="navigate">{to}</div>),
}));

// Mock the useAuth context
jest.mock('../context/AuthContext', () => ({
  useAuth: jest.fn(() => ({
    registerUser: jest.fn(),
  })),
}));

describe('Register Component', () => {
  it('renders the Register form correctly', () => {
    render(<Register />);
    
    // Check if form elements are rendered
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('submits the form and redirects to login on successful registration', async () => {
    // Mock the useAuth context for successful registration
    const mockRegisterUser = jest.fn(() => Promise.resolve());
    jest.mock('../context/AuthContext', () => ({
      useAuth: jest.fn(() => ({
        registerUser: mockRegisterUser,
      })),
    }));

    render(<Register />);
    
    // Fill out the form
    userEvent.type(screen.getByLabelText(/username/i), 'omprakash');
    userEvent.type(screen.getByLabelText(/email/i), 'omprakash@gmail.com');
    userEvent.type(screen.getByLabelText(/password/i), '123456789');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    // Wait for the registration to complete
    await waitFor(() => {
      // Check if the registration function is called
      expect(mockRegisterUser).toHaveBeenCalledWith({
        username: 'omprakash',
        email: 'omprakash@gmail.com',
        password: '123456789',
      });

      // Check if it redirects to the login page
      expect(screen.getByTestId('navigate')).toHaveTextContent('/login');
    });
  });
});
