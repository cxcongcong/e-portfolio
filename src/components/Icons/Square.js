function Square(props) {
    return (
        <div style={{
                width:'16.5px',
                height:'16px',
                position:props.position,
                left:props.left,
                top:props.top,
                background:props.bgcolor,
                display:props.display
                }}>
        </div>
    )
}

export default Square;