import * as labels from '../../utils/textLabels';
import { EXAM_LOCATIONID_HEADER, EXAM_DATE_HEADER, EXAM_RESULT_HEADER } from '../../utils/textLabels';


const ExaminationTableHeader = () => {


    return (
    <div className="">
        <div className="examHeader ">{labels.EXAM_ID_HEADER}</div>
        <div className="examHeader ">{labels.EXAM_LOCATIONID_HEADER}</div>
        <div className="examHeader ">{labels.EXAM_DATE_HEADER}</div>
        <div className="examHeader ">{labels.EXAM_RESULT_HEADER}</div>
    </div>);
}

export default ExaminationTableHeader