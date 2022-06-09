import './MediaDiv.css';

function MediaDiv(props) {
    const media_info = props.info.split(';');
    const media_div = media_info.map((media) => {
        const media_icon = media.split(',')[0];
        const media_link = media.split(',')[1];
        return (
            <a href={media_link}><img style={{width: props.imgw, height: props.imgh}} src={media_icon} alt={media_icon}/></a>
        )
    });
    return (
        <div className="media-div" style={{width: props.divw, height: props.divh, position: props.divp, left: props.divl, bottom: props.divb}}>
            {media_div}
        </div>
    )
}

export default MediaDiv;