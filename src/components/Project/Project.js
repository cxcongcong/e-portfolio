import '../Icons/Resume.css';
import ProjectInfoBlock from './ProjectInfoBlock';
import { project_1 } from './ProjectData';

function Project() {
    return (
        <div className="resume">
            <div className='resume-context'>
                <div className="resume-heading">Projects</div>
                <div className="resume-info-block resume-info-border">
                    <ProjectInfoBlock info={project_1}/>
                </div>
                <div className='resume-ending'></div>
            </div>
        </div>
    )
}

export default Project;