import React from 'react';
import ChartElement from '../../models/chartElement';

import './SimplePercentAreaChart.css';

const SimplePercentAreaChart: React.FC<{items: ChartElement[]}> = (props) => {

    return (
        <div className="chartContainer">            
        {props.items.map(item => (
            <div key={item.label} className="chartElement"  style={{width:item.value, backgroundColor: item.color} } >{item.value} {item.label}</div>
        ))}
        </div>
    );
}

export default SimplePercentAreaChart;