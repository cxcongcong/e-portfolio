import "./Navbar.css";
import Square from "../Icons/Square";

function Navbar() {
    return (
        <div className="navbar-div">
            <Square left="50px" top="53px" bgcolor="blue"/>
            <div className="navbar-name">Irene Chen</div>
            <div className="navbar-career">/ FRONTEND DEVELOPER</div>
        </div>
    )
}

export default Navbar;