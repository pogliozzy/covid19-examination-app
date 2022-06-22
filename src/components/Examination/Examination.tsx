import React from 'react';
import Exam from '../../models/exam';

import './Examination.css';

const Examination: React.FC<{exam :Exam}> = ({exam}) => {

    const dataExp = new Date(exam.date);

    return (
    <div className="examRow">
        <div className="examCell examId">{exam.id}</div>
        <div className="examCell locationId">{exam.locationId}</div>
        <div className="examCell examDate">{dataExp.toLocaleDateString()}</div>
        <div className="examCell examResult">{exam.result}</div>        
    </div>);
}

export default Examination