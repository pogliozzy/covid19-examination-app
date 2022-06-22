import React from 'react';
import Exam from '../../models/exam';
import ChartElement from '../../models/exam';

import './SimplePercentAreaChart.css';

const SimplePercentAreaChart: React.FC<{items: Exam[]}> = (props) => {

    const labels = Array.from(new Set(props.items.map((item: any) => item.result))); 

    let colorCount = 1;
  
    const pairs = labels.map((label:string) => {
      const value = props.items.filter(item => item.result === label).length;
      let percentage = '0%';
      if(value > 0){
        percentage = Math.round((value / props.items.length) * 100) + '%';
      }
      colorCount++;
      return {'label':label , 'value': percentage, 'color': colorCount%2 ==0 ? 'lightcyan':'lightcoral'}; 
  
    });
  
    console.log("dati charts", pairs);


    return (
        <div className="chartContainer">            
        {pairs.map(item => (
            <div key={item.label} className="chartElement"  style={{width:item.value, backgroundColor: item.color} } >{item.value} {item.label}</div>
        ))}
        </div>
    );
}

export default SimplePercentAreaChart;