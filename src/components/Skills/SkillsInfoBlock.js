import './SkillsInfoBlock.css';
import Square from '../Icons/Square';


function SkillsInfoBlock(props) {
    const heading = props.info.heading;
    const context = props.info.context.map((skill) => {
        return <div>
                    <Square bgcolor="blue" display="inline-block"/>
                    <div className='resume-skills-skill'>{skill}</div>
                </div>
    });
    return (
        <div className='resume-skills-info-block'>
            <div className='resume-skills-heading'>{heading}</div>
            <div className='resume-skills-context'>
                {context}
            </div>
        </div>
    )
}

export default SkillsInfoBlock;