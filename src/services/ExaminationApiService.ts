import Exam from "../models/exam";
import data from '../mockData/db.json';

const ExaminationApiService = (locationId : number , mockApi :boolean) => {

const getData = (locationId : number) => {
      let reult = [];
  
      if(!mockApi){
          fetch('/examinations/' + locationId ).then(response => {
            return response.json();
          }).catch(error => {return []});            
          
          
        }else{
          let  resultData = [];
          if(locationId>-1){
              resultData = data.filter(obj => {
                  return obj.locationId === locationId;          
                });
          }else{
              resultData = data;
          }
          
          let resultList = [];
          resultList = resultData.map(item => {
            const exObj= {} as Exam;
            exObj.date = item.date;
            exObj.id = item.id;
            exObj.locationId = item.locationId;
            exObj.result = item.result;
          
            return exObj; });
          return (resultList); 
        }      
  //}

};

    //const getExaminationList = (locationId : number , mockApi :boolean) => {
        if(!mockApi){
            fetch('/examinations/' + locationId ).then(response => {
              return response.json();
            }).catch(error => {return []});
                
            //.then((data) => {
            //  setExams(data)
            //})
            ;
          }else{
            let  resultData = [];
            if(locationId>-1){
                resultData = data.filter(obj => {
                    return obj.locationId === locationId;          
                  });
            }else{
                resultData = data;
            }
            
            let resultList = [];
            resultList = resultData.map(item => {
              const exObj= {} as Exam;
              exObj.date = item.date;
              exObj.id = item.id;
              exObj.locationId = item.locationId;
              exObj.result = item.result;
            
              return exObj; });
            return (resultList); 
          }      
    //}

};

/*
const getData = (locationId : number) => {
      let reult = [];
  
      if(!mockApi){
          fetch('/examinations/' + locationId ).then(response => {
            return response.json();
          }).catch(error => {return []});            
          
          
        }else{
          let  resultData = [];
          if(locationId>-1){
              resultData = data.filter(obj => {
                  return obj.locationId === locationId;          
                });
          }else{
              resultData = data;
          }
          
          let resultList = [];
          resultList = resultData.map(item => {
            const exObj= {} as Exam;
            exObj.date = item.date;
            exObj.id = item.id;
            exObj.locationId = item.locationId;
            exObj.result = item.result;
          
            return exObj; });
          return (resultList); 
        }      
  //}

};

*/

export default ExaminationApiService;