import React from 'react';
import { render, screen } from '@testing-library/react';
import { getGraphDetails } from './SimplePercentAreaChart';
import SimplePercentAreaChart from './SimplePercentAreaChart';

import examParser from '../../utils/examParser';

const dataMock = [  {
    "date": "2020-03-06T15:00:00.000Z",
    "id": 1,
    "locationId": 5,
    "result": "pending"
  },
  {
    "date": "2020-03-07T15:00:00.000Z",
    "id": 2,
    "locationId": 9,
    "result": "positive"
  },
  {
    "date": "2020-03-08T15:00:00.000Z",
    "id": 3,
    "locationId": 6,
    "result": "positive"
  },
  {
    "date": "2020-03-09T15:00:00.000Z",
    "id": 4,
    "locationId": 3,
    "result": "negative"
  }];

const exams = examParser(dataMock);

/**
 * check if graph is rendered
 */

test('renders message "No data to display"', () => {
  render(<SimplePercentAreaChart items = {exams} />);
  let textGrap = screen.getByText(/50% positive/i);
  expect(textGrap).toBeInTheDocument();
  textGrap = screen.getByText(/25% negative/i);

});

/** check percentage */

test('Check if perentages sum is equal to 100' , () => {
    const graphDetails = getGraphDetails(exams);    

    let sum = 0;
    graphDetails.map((item) => {        
        sum = sum + item.percentage;
    });

    expect(sum).toBe(100);

});