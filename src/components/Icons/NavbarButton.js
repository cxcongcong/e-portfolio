import "./NavBarButton.css";

function NavbarButton(props) {
    let sublist = '';
    if (props.sublist) {
        const sublist_items_name = props.sublist.split(';');
        const sublist_items_div = sublist_items_name.map((name,i) =>
            <div className="navbtn-sublist-btn"><NavbarButton name={name} top={45+45*i}/></div>
        )
        sublist = <div className="navbtn-sublist">
                        {sublist_items_div}
                    </div>;
    }

    return (
        <div className="navbtn-container" style={{position:'absolute', top:props.top, right: props.right}}>
            <div className="navbtn-btn">{props.name}</div>
            {sublist}
        </div>
    )
}

export default NavbarButton;