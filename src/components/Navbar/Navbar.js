import "./Navbar.css";
import Square from "../Icons/Square";
import NavbarButton from "../Icons/NavbarButton";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-div">
            <div className="navbar-left-part">
                <Square position="absolute" left="50px" top="53px" bgcolor="blue"/>
                <div className="navbar-name">Irene Chen</div>
                <div className="navbar-career">/ FRONTEND DEVELOPER</div>
            </div>
            <div className="navbar-right-part">
                <Link to="/About"><NavbarButton name="ABOUT ME" top="0px" right="310px"/></Link>
                <NavbarButton name="RESUME" top="0px" right="220px" sublist="SKILLS,/Skills;EXPERIENCE,/Experience;EDUCATION,/Education"/>
                <Link to="/Blog"><NavbarButton name="PROJECTS" top="0px" right="140px"/></Link>
                <Link to="/Contact"><NavbarButton name="CONTACT" top="0px" right="60px"/></Link>
            </div>
        </div>
    )
}

export default Navbar;