import "./NavBarButton.css";

function NavbarButton(props) {
    return (
        <div className="a" style={{position:'absolute', top:props.top, right: props.right}}>
            <div className="b">{props.name}</div>
            <div className="c">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarButton;