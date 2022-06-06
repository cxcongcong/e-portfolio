import './FooterInfoBlock.css';

function FooterInfoBlock(props) {
    return (
            <div className='footer-block-div' style={{right: props.right}}>
                <div>{props.heading}</div>
                <div>{props.content}</div>
            </div>
    )
}

export default FooterInfoBlock;