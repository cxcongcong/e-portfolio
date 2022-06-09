import FooterInfoBlock from '../Icons/FooterInfoBlock';
import MediaDiv from '../Icons/MediaDiv';
import facebookIcon from '../../images/facebook.webp';
import linkedinIcon from '../../images/linkedin.webp';
import insIcon from '../../images/ins.webp';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-div">
            <FooterInfoBlock heading="Call" content="0410224620" right="415px"/>
            <FooterInfoBlock heading="Write" content="cxcongcong@gmail.com" right="230px"/>
            <FooterInfoBlock heading="Follow" content={<MediaDiv imgh="20px" imgw="20px" divw="100px" divl="15px" divb="-35px"
                                        info={`${facebookIcon},https://www.facebook.com/irene.chen.1840/;
                                        ${linkedinIcon},https://www.linkedin.com/in/xiaocong-chen/;
                                        ${insIcon},https://www.instagram.com/xiaoccccong/`}/>} right="60px"/>
        </div>
    )
}

export default Footer;