import '../Icons/Resume.css';
import ExperienceInfoBlock from './ExperienceInfoBlock';
import { experience_1, experience_2, experience_3, experience_4 } from './ExperienceData.js';

function Experience() {
    return (
        <div className="resume">
            <div className='resume-context'>
                <div className="resume-heading">Experience</div>
                <div className="resume-info-block resume-info-border">
                    <ExperienceInfoBlock info={experience_1}/>
                    <ExperienceInfoBlock info={experience_2}/>
                    <ExperienceInfoBlock info={experience_3}/>
                    <ExperienceInfoBlock info={experience_4}/>
                </div>
                <div className='resume-ending'></div>
            </div>
        </div>
    )
}

export default Experience;