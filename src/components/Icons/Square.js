function Square(props) {
    return (
        <div style={{
                width:'16.5px',
                height:'16px',
                position:'absolute',
                left:props.left,
                top:props.top,
                background:props.bgcolor,
                }}>
        </div>
    )
}

export default Square;