import '../Icons/Resume.css';
import EducationInfoBlock from './EducationInfoBlock';
import { education_1, education_2} from './EducationData.js'

function Education() {
    return (
        <div className="resume">
            <div className='resume-context'>
                <div className="resume-heading">Education</div>
                <div className="resume-info-block resume-info-border">
                    <EducationInfoBlock info={education_1}/>
                    <EducationInfoBlock info={education_2}/>
                </div>
                <div className='resume-ending'></div>
            </div>
        </div>
    )
}

export default Education;