import '../Icons/Resume.css';
import './Project.css';
import ProjectInfoBlock from './ProjectInfoBlock';
import { project_1, project_2, project_3, project_4 } from './ProjectData';
import { useState } from 'react';

function Project() {
    const [ project, setProject ] = useState(project_1);
    return (
        <div className="resume">
            <div className='resume-context'>
                <div className="resume-heading">
                    Projects
                    <div>
                        <div className='project-switch-point' onClick={()=>{setProject(project_1)}}>1</div>
                        <div className='project-switch-point' onClick={()=>{setProject(project_2)}}>2</div>
                        <div className='project-switch-point' onClick={()=>{setProject(project_3)}}>3</div>
                        <div className='project-switch-point' onClick={()=>{setProject(project_4)}}>4</div>
                    </div>
                </div>
                <div className="resume-info-block resume-info-border">
                    <ProjectInfoBlock info={project}/>
                </div>
                <div className='resume-ending'></div>
            </div>
        </div>
    )
}

export default Project;