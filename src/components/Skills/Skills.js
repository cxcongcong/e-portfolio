import '../Icons/Resume.css';
import Square from '../Icons/Square';

function Skills() {
    return (
        <div className="resume">
            <div className='resume-context'>
                <div className="resume-heading">Professional skillset</div>
                <div className="resume-info-block">
                    <div className='resume-skills-info-block'>
                        <div className='resume-skills-heading'>Soft skills</div>
                        <div className='resume-skills-context' style={{position:'relative'}}>
                            <Square bgcolor="blue" display="inline-block"/>a
                            <Square bgcolor="blue" display="inline-block"/>b
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;