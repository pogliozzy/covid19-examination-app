import React from 'react';
import { render, screen } from '@testing-library/react';
import Exam from '../../models/exam';
import Examination from './Examination';

const item = {
        "date": "2020-03-05T15:00:00.000Z",
        "id": 0,
        "locationId": 1,
        "result": "pending"
      };

const exMockObj = {} as Exam;

exMockObj.utcdate = item.date;
exMockObj.date = new Date(item.date);
exMockObj.id = item.id;
exMockObj.locationId = item.locationId;
exMockObj.result = item.result;

test('renders learn react link', () => {
  render(<Examination key={exMockObj.id} exam = {exMockObj} />);
  //const linkElement = screen.getByText(/learn react/i);
        const testResult = screen.getByText(/pending/i);
        expect(testResult).toBeInTheDocument();
  //expect(linkElement).toBeInTheDocument();
});
