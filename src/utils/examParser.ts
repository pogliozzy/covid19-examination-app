import Exam from "../models/exam";

const examParser = (data : any[]) => {

        const resultList = data.map((item) => {
                const exObj = {} as Exam;
                exObj.utcdate = item.date;
                exObj.date = new Date(item.date);
                exObj.id = item.id;
                exObj.locationId = item.locationId;
                exObj.result = item.result;
          
                return exObj;
              });
        return resultList;
}

export default examParser;