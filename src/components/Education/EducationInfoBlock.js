import './EducationInfoBlock.css';

function EducationInfoBlock(props) {
    const school = props.info.school;
    const time = props.info.time;
    const location = props.info.location;
    const subject = props.info.subject;
    return (
        <div className='resume-education-info-block'>
            <div className='resume-education-school'>{school}</div>
            <div className='resume-education-time'>{time}</div>
            <div className='resume-education-location'>{location}</div>
            <div className='resume-education-subject'>{subject}</div>
        </div>
    )
}

export default EducationInfoBlock;