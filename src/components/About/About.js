import DownloadButton from "../Icons/DownloadButton";
import "./About.css";
import facebookIcon from '../../images/facebook.webp';
import linkedinIcon from '../../images/linkedin.webp';
import insIcon from '../../images/ins.webp';

function About() {
    return (
        <div className="about">
            <div className="about-bg">
                <div className="about-bg-left"></div>
                <div className="about-bg-right"></div>
            </div>
            <div className="about-info-div">
                <div className="about-info-left-part">
                    <div className="about-info-avatar"></div>
                    <div className="about-info-name">Irene Chen</div>
                    <div className="about-info-blue-line"></div>
                    <div className="about-info-career">FRONTEND   DEVELOPER</div>
                    <div className="about-info-media-bg">
                        <div className="about-info-media-div">
                            <div><img src={facebookIcon} alt="facebook"/></div>
                            <div><img src={linkedinIcon} alt="linkedin"/></div>
                            <div><img src={insIcon} alt="ins"/></div>
                        </div>
                        
                    </div>
                </div>
                <div className="about-info-right-part">
                    <div className="about-info-text-1">Creactive</div>
                    <div className="about-info-text-2">DEVELOPER</div>
                    <div className="about-info-text-3">SENSIBLE TO FRONTEND</div>
                    <div className="about-info-button-div">
                        <DownloadButton name="RESUME" top="80px"/>
                        <DownloadButton name="Canva doc" left="200px" top="80px" bgcolor="#70b5f5" hvbgcolor="#97D9E1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;