import React from 'react';
import Examination from "./Examination";
import Exam from '../../models/exam';

import './ExaminationList.css';

const ExaminationList: React.FC<{items: Exam[]}> = (props) => {
    return (
        <div className="examTable">            
        {props.items.map(item => (
            <Examination key={item.id} exam = {item} />
        ))}
        </div>
    );
}

export default ExaminationList;