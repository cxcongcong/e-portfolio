import './ProjectInfoBlock.css';

function ProjectInfoBlock(props) {
    const name = props.info.name;
    const pic = props.info.pic;
    const tool = props.info.tools.map((t) => {
        return <div>{t}</div>
    })
    const desc = props.info.desc.map((description) => {
        return <li>{description}</li>
    });
    return (
        <div className='project-info-block'>
            <div className='project-info-block-up'>
                <div className='project-name-style'>{name}</div>
                <div className='project-tool-style'>{tool}</div>
                <div className='project-img-style'><img src={pic} alt={pic}/></div>
            </div>
            <div className='project-info-block-bottom'>
                <ul>{desc}</ul>
            </div>
        </div>
    )
}

export default ProjectInfoBlock;