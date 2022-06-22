import React from 'react';
import Exam from '../../models/exam';
import * as labels from "../../utils/textLabels";

import './Examination.css';

const Examination: React.FC<{exam :Exam}> = ({exam}) => {

    const dataExp = new Date(exam.date);
    const resultColor = exam.result.toLowerCase()===labels.EXAM_RESULT_POSITIVE.toLowerCase()?'red':
                            exam.result.toLowerCase()===labels.EXAM_RESULT_NEGATIVE.toLowerCase()?'green':'black'; 

    return (
    <div className="examRow">
        <div className="examCell">{exam.id}</div>
        <div className="examCell">{exam.locationId}</div>
        <div className="examCell">{dataExp.toLocaleDateString()}</div>
        <div className="examCell" style={{color:resultColor}}>{exam.result}</div>        
    </div>);
}

export default Examination