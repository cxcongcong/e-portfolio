import DownloadButton from "../Icons/DownloadButton";
import "./About.css";
import facebookIcon from '../../images/facebook.webp';
import linkedinIcon from '../../images/linkedin.webp';
import insIcon from '../../images/ins.webp';
import MediaDiv from "../Icons/MediaDiv";
import CV from '../../files/CV.doc';

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
                        <MediaDiv info={`${facebookIcon},https://www.facebook.com/irene.chen.1840/;
                                        ${linkedinIcon},https://www.linkedin.com/in/xiaocong-chen/;
                                        ${insIcon},https://www.instagram.com/xiaoccccong/`}/>
                    </div>
                </div>
                <div className="about-info-right-part">
                    <div className="about-info-text-1">Creactive</div>
                    <div className="about-info-text-2">DEVELOPER</div>
                    <div className="about-info-text-3">SENSIBLE TO FRONTEND</div>
                    <div className="about-info-button-div">
                        <DownloadButton name="RESUME" top="80px" link={CV}/>
                        <DownloadButton name="Canva doc" left="200px" top="80px" bgcolor="#70b5f5" hvbgcolor="#97D9E1" link="https://www.canva.com/design/DAFB8rhKsMM/umt5YG19pUxsGnNoXKZgXA/view?utm_content=DAFB8rhKsMM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;