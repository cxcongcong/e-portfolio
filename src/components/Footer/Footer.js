import FooterInfoBlock from '../Icons/FooterInfoBlock';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-div">
            <FooterInfoBlock heading="Call" content="0410224620" right="415px"/>
            <FooterInfoBlock heading="Write" content="cxcongcong@gmail.com" right="230px"/>
            <FooterInfoBlock heading="Follow" content="" right="60px"/>
        </div>
    )
}

export default Footer;