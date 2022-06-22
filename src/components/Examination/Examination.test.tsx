import React from "react";
import { render, screen } from "@testing-library/react";
import Exam from "../../models/exam";
import Examination from "./Examination";

import examParser from "../../utils/examParser";
import ExaminationList from "./ExaminationList";


const item = {
  date: "2020-03-05T15:00:00.000Z",
  id: 0,
  locationId: 1,
  result: "pending",
};

const dataMock = [
  {
    date: "2020-03-06T15:00:00.000Z",
    id: 1,
    locationId: 5,
    result: "pending",
  },
  {
    date: "2020-03-07T15:00:00.000Z",
    id: 2,
    locationId: 9,
    result: "positive",
  },
  {
    date: "2020-03-08T15:00:00.000Z",
    id: 3,
    locationId: 6,
    result: "positive",
  },
  {
    date: "2020-03-09T15:00:00.000Z",
    id: 4,
    locationId: 3,
    result: "negative",
  },
];

const exMockObj = {} as Exam;

exMockObj.utcdate = item.date;
exMockObj.date = new Date(item.date);
exMockObj.id = item.id;
exMockObj.locationId = item.locationId;
exMockObj.result = item.result;

/**
 * check render of single row
 */
test("renders learn react link", () => {
  render(<Examination key={exMockObj.id} exam={exMockObj} />);
  //const linkElement = screen.getByText(/learn react/i);
  const testResult = screen.getByText(/pending/i);
  expect(testResult).toBeInTheDocument();
  //expect(linkElement).toBeInTheDocument();
});

/**
 * check table render
 */
test("render exams table", () => {
  const exams = examParser(dataMock);
  render(<ExaminationList items={exams} />);

  const testResult = screen.getByText(/negative/i);
  expect(testResult).toBeInTheDocument();

  const testHeader = screen.getByText(/Location Id/i);
  expect(testHeader).toBeInTheDocument();

  const testHeaderDate = screen.getByText(/Date/i);
  expect(testHeaderDate).toBeInTheDocument();

});
