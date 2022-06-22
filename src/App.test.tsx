import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * check "No data..." message  
 */

test('renders message "No data to display"', () => {
  render(<App />);
  const textNoDisplay = screen.getByText(/No data to display/i);
  expect(textNoDisplay).toBeInTheDocument();

});

/**
 * check if navigation controls are properly rendered 
 */
test('renders navigation buttons', () => {
  render(<App />);
  const textAllExams = screen.getByText(/All Exams/i);
  expect(textAllExams).toBeInTheDocument();

  const textToggleStats = screen.getByText(/Toggle Stats/i);
  expect(textToggleStats).toBeInTheDocument();

  const dropdownCheck = screen.getByDisplayValue(/All/i);
  expect(dropdownCheck).toBeInTheDocument();

});

/**
 * check Data table in not rendered yet 
 */

 test('check Data table in not rendered yet"', () => {
  render(<App />);
  const textResult = screen.findAllByText(/Result/i);
  expect(textResult).toBeNull;

});

