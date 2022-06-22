import Exam from "../models/exam";
import data from "../mockData/db.json";
import examParser from "../utils/examParser";

const ExaminationApiService = (locationId: number, mockApi: boolean) => {
  const getData = (locationId: number) => {
    let reult = [];

    if (!mockApi) {
      fetch("/examinations/" + locationId)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return examParser(data);
        })
        .catch((error) => {
          return [];
        });
    } else {
      let resultData = [];
      if (locationId > -1) {
        resultData = data.filter((obj) => {
          return obj.locationId === locationId;
        });
      } else {
        resultData = data;
      }

      let resultList = examParser(resultData);

      return resultList;
    }
  };
};

export default ExaminationApiService;
