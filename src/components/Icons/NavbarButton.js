import "./NavBarButton.css";

function NavbarButton(props) {
    const sublist = <div className="navbtn-sublist">
                        <div className="hi"><NavbarButton name={props.subitem1}/></div>
                        <NavbarButton name={props.subitem2} top="90px"/>
                        <NavbarButton name={props.subitem3} top="135px"/>
                    </div>;
    return (
        <div className="navbtn-container" style={{position:'absolute', top:props.top, right: props.right}}>
            <div className="navbtn-btn">{props.name}</div>
            {props.sublist?sublist:''}
        </div>
    )

    
}

export default NavbarButton;