import { useState } from 'react';
import './DownloadButton.css';

function download(url){
    if(url) {
        var a = document.createElement('a');
        var event = new MouseEvent('click');
        a.download = url.toString();
        a.href = url;
        a.dispatchEvent(event)
    }
}

function DownloadButton(props) {
    const [ hover, setHover ] = useState(false);
    function toggleHover() {
        setHover(!hover)
    }
    let background_color;
    if (hover) {
        background_color = props.hvbgcolor
    } else {
        background_color =  props.bgcolor
    }
    return (
        <button className="about-download-btn" 
            onClick={()=>download(props.link)}
            style={{left: props.left, 
                    top: props.top,
                    backgroundColor: background_color}}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}>
            {props.name}
        </button>
    )
}

export default DownloadButton;