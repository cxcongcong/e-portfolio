import { useState } from 'react';
import './DownloadButton.css';

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
        <button  className="about-download-btn" 
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