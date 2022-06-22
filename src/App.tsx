import React , {useState} from 'react';

import './App.css';
import ExaminationList from './components/Examination/ExaminationList';
import SimplePercentAreaChart from './components/Charts/SimplePercentAreaChart';
import ChartPair from './models/chartElement';
import ExaminationApiService from './services/ExaminationApiService';


import Exam from './models/exam';

import data from './mockData/db.json';


function App() {

  /* stato */
  const [exams , setExams] = useState<Exam[]>([]);
  const [location, setLocation] = useState<number>(0);
  //const [dropdownValue, setDropdownValue] = useState<number>(0);
  //const mockApi = true; 


  /** 
   *  Get Examinations by Location
   */

const getDataByLoc = (locationId : number ) => {
    
    const resultData = data.filter(obj => {
            return obj.locationId === locationId;          
          });
    
    const resultList = resultData.map(item => {
      const exObj= {} as Exam;
      exObj.date = item.date;
      exObj.id = item.id;
      exObj.locationId = item.locationId;
      exObj.result = item.result;
    
      return exObj; });


      console.log("Lista filtrata",resultList);
    return (resultList);            
};

/** 
   *  Get All Examination
   */

const getAllData = () => {
  
     const resultData = data
     
     setLocation(0);  

  const resultList = resultData.map(item => {
    const exObj= {} as Exam;
    exObj.date = item.date;
    exObj.id = item.id;
    exObj.locationId = item.locationId;
    exObj.result = item.result;
  
    return exObj; });
    
  return (resultList); 
};

  const fetchData = () => {
    setExams(getAllData());      
  }

  const fetchDataByLocation = () => {
    setExams(getDataByLoc(location));  
  }

  const showStats = () => {

  }


  /**
   * Location dropdown
   */

  const locations = data.map(item => item.locationId).filter((value, index, self) => self.indexOf(value) === index).sort((a,b) => a-b);
   
  const changeLocationHandler = (event : React.FormEvent<HTMLSelectElement>) => {    
  
    setLocation(Number(event.currentTarget.value));
    const newLocation =  Number(event.currentTarget.value);
    console.log("la location è ", Number(event.currentTarget.value) , location);
    
    if(newLocation>0){
      setExams(getDataByLoc(newLocation)); 
    }else{ 
      setExams(getAllData());   
    }
  }

  const options = locations.map((numero) => 
    <option key={numero} value={numero}>{numero}</option>
  );

  const dropdown = <select className="selectButton" onChange={changeLocationHandler} value={location} >        
    <option key="0" value="0">All</option>
    {options}
  </select>;

  /** Charts */
  const labels = Array.from(new Set(data.map((item: any) => item.result))); //data.map(item => item.result.filter((value, index, self) => self.indexOf(value) === index).sort();


  let colorCount = 1;

  const pairs = labels.map((label:string) => {
    const value = data.filter(item => item.result === label).length;
    let percentage = '0%';
    if(value > 0){
      percentage = Math.round((value / data.length) * 100) + '%';
    }
    colorCount++;
    return {'label':label , 'value': percentage, 'color': colorCount%2 ==0 ? 'lightcyan':'lightcoral'}; 

  });

  console.log("dati charts", pairs);


  /** Main App */
   /** <label className="description">Change Location</label> */

  return (
    <div className="App">
      <section className="navigation">
        <button className="selectButton" onClick={fetchData} > All Exams </button>   
        {dropdown}
        <button className="selectButton" onClick={showStats} > Stats </button> 
      </section>
      <section>
        <ExaminationList items = {exams} />
      </section>
      <section className="stats">
          <SimplePercentAreaChart items={pairs}/>
      </section>  
    </div>
  );
}

export default App;
