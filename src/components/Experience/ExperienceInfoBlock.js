import './ExperienceInfoBlock.css';

function ExperienceInfoBlock(props) {
    const time = props.info.time;
    const career = props.info.career;
    const company = props.info.company;
    const location = props.info.location;
    const description = props.info.description.map((desc) => {
        return (
            <li>{desc}</li>
        )
    })
    return (
        <div className='resume-experience-info-block'>
            <div className='resume-experience-info-block-left'>
                <div className='resume-experience-time'>{time}</div>
                <div className='resume-experience-career'>{career}</div>
                <div className='resume-experience-company'>{company}</div>
                <div className='resume-experience-location'>{location}</div>
            </div>
            <div className='resume-experience-info-block-right'>
                <ul>{description}</ul>
            </div>
        </div>
    )
}

export default ExperienceInfoBlock;