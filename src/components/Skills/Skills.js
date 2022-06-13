import '../Icons/Resume.css';
import { soft_skills, languages, programming } from './SkillsData';
import SkillsInfoBlock from './SkillsInfoBlock';

function Skills() {
    return (
        <div className="resume">
            <div className='resume-context'>
                <div className="resume-heading">Professional skillset</div>
                <div className="resume-info-block resume-info-shadow">
                    <SkillsInfoBlock info={soft_skills}/>
                    <SkillsInfoBlock info={languages}/>
                    <SkillsInfoBlock info={programming}/>
                </div>
                <div className='resume-ending'></div>
            </div>
        </div>
    )
}

export default Skills;