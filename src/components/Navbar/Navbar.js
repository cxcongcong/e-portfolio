import "./Navbar.css";
import Square from "../Icons/Square";
import NavbarButton from "../Icons/NavbarButton";

function Navbar() {
    return (
        <div className="navbar-div">
            <div className="navbar-left-part">
                <Square left="50px" top="53px" bgcolor="blue"/>
                <div className="navbar-name">Irene Chen</div>
                <div className="navbar-career">/ FRONTEND DEVELOPER</div>
            </div>
            <div className="navbar-right-part">
                <NavbarButton name="ABOUT ME" top="0px" right="310px"/>
                <NavbarButton name="RESUME" top="0px" right="220px" sublist="true" subitem1="SKILLS" subitem2="EXPERIENCE" subitem3="EDUCATION"/>
                <NavbarButton name="BLOGS" top="0px" right="140px" sublist="true" subitem1="Content" subitem2="The art of..." subitem3="How to..."/>
                <NavbarButton name="CONTACT" top="0px" right="60px"/>
            </div>
        </div>
    )
}

export default Navbar;