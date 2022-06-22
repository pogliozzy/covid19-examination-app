import React from 'react';
import Exam from '../../models/exam';
import ChartElement from '../../models/exam';

import './SimplePercentAreaChart.css';

const SimplePercentAreaChart: React.FC<{items: Exam[]}> = (props) => {

    const exams = props.items;

   

    
   
    const graphDetails = getGraphDetails(exams);

    return (
        <div className="chartContainer">            
        {graphDetails.map(item => (
            <div key={item.label} className="chartElement"  style={{width:item.value, backgroundColor: item.color} } title={item.label} >{item.value} {item.label}</div>
        ))}
        </div>
    );
}

export const getGraphDetails = ( exams:Exam[]) => {

  let colorCount = 1;
  let totalPercentage = 0;
  let tmpPercentage = 0;

  const labels = Array.from(new Set(exams.map((item: any) => item.result))); 

  let graphDetails = labels.map((label:string) => {
    const value = exams.filter(item => item.result === label).length;
    let percentage = 0;
    if(value > 0){
      tmpPercentage = Math.round((value / exams.length) * 100) ;
    }
    totalPercentage+=tmpPercentage;

    if(totalPercentage>100){
      let diff = totalPercentage - 100;
      tmpPercentage = tmpPercentage - diff;
    }

    percentage = tmpPercentage;

    colorCount++;
    return {'label':label , 'value': percentage + '%', 'percentage': percentage ,'color': colorCount%2 ==0 ? 'lightcyan':'lightgreen'}; 
    });

    return graphDetails;
}

export default SimplePercentAreaChart;