import React from 'react';
import Exam from '../../models/exam';

import './Examination.css';

const Examination: React.FC<{exam :Exam}> = ({exam}) => {


    return (
    <div className="examRow">
        <div className="examCell examDate">{exam.date}</div>
        <div className="examCell examId">{exam.id}</div>
        <div className="examCell locationId">{exam.locationId}</div>
        <div className="examCell examResult">{exam.result}</div>
    </div>);
}

export default Examination