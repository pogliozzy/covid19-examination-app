import React, { useState } from "react";

import "./App.css";
import ExaminationList from "./components/Examination/ExaminationList";
import SimplePercentAreaChart from "./components/Charts/SimplePercentAreaChart";
import * as labels from "./utils/textLabels";

import ExaminationApiService from "./services/ExaminationApiService";

import Exam from "./models/exam";

import data from "./mockData/db.json";

function App() {
  /* stati */
  const [exams, setExams] = useState<Exam[]>([]);
  const [location, setLocation] = useState<number>(0);
  const [showChart, setShowChart] = useState<Boolean>(false);
  //const mockApi = true;

  /**
   *  Get Examinations by Location
   */

  /**
   *  Get All Examination
   */

  const getAllData = () => {
    const resultData = data;

    setLocation(0);

    const resultList = resultData.map((item) => {
      const exObj = {} as Exam;
      exObj.utcdate = item.date;
      exObj.date = new Date(item.date);
      exObj.id = item.id;
      exObj.locationId = item.locationId;
      exObj.result = item.result;

      return exObj;
    });

    return resultList;
  };

  const getDataByLoc = (locationId: number) => {
    const resultData = data.filter((obj) => {
      return obj.locationId === locationId;
    });

    const resultList = resultData.map((item) => {
      const exObj = {} as Exam;
      exObj.utcdate = item.date;
      exObj.date = new Date(item.date);
      exObj.id = item.id;
      exObj.locationId = item.locationId;
      exObj.result = item.result;

      return exObj;
    });

    console.log("Lista filtrata", resultList);
    return resultList;
  };

  const fetchData = () => {
    setExams(getAllData());
  };

  const fetchDataByLocation = () => {
    setExams(getDataByLoc(location));
  };

  /**
   * Location dropdown
   */

  const locations = data
    .map((item) => item.locationId)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a - b);

  const changeLocationHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setLocation(Number(event.currentTarget.value));
    const newLocation = Number(event.currentTarget.value);
    console.log("la location è ", Number(event.currentTarget.value), location);

    if (newLocation > 0) {
      setExams(getDataByLoc(newLocation));
    } else {
      setExams(getAllData());
    }
  };

  const options = locations.map((numero) => (
    <option key={numero} value={numero}>
      {numero}
    </option>
  ));

  const dropdown = (
    <select
      className="selectButton"
      onChange={changeLocationHandler}
      value={location}
    >
      <option key="0" value="0">
        All
      </option>
      {options}
    </select>
  );

  /** Charts
   * Sposto logica nel componente, lascio gestione stato
   * */

  const toggleChart = () => {
    showChart ? setShowChart(false) : setShowChart(true);
  };

  /** Main App */

  return (
    <div className="App">
      <section className="navigation">
        <button className="selectButton" onClick={fetchData}>
          {" "}
          {labels.ALL_EXAM_BUTTON}{" "}
        </button>
        {dropdown}
        <button className="selectButton" onClick={toggleChart}>
          {" "}
          {labels.STATS_BUTTON}{" "}
        </button>
      </section>
      <section className="stats">
        {showChart && (
          <SimplePercentAreaChart items={exams} />
        )}
      </section>
      <section>{exams.length > 0 && <ExaminationList items={exams} />}</section>
      <section>{exams.length == 0 && <h1>{labels.NO_DATA}</h1>}</section>
    </div>
  );
}

export default App;
