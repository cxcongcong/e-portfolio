import './Contact.css';
import { useState } from "react";
import Square from '../Icons/Square';
import emailIcon from '../../images/contact_email_icon.png';
import phoneIcon from '../../images/contact_phone_icon.png';
import DownloadButton from '../Icons/DownloadButton';

function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit} id='contact-form'>
          <table>
              <tr>
                  <td>
                    <label>First Name *
                        <input 
                        type="text" 
                        name="firstname" 
                        value={inputs.firstname || ""} 
                        onChange={handleChange}
                        required
                        />
                    </label>
                  </td>
                  <td>
                    <label>Last Name *
                        <input 
                            type="text" 
                            name="lastname" 
                            value={inputs.lastname || ""} 
                            onChange={handleChange}
                            required
                        />
                    </label>
                  </td>
              </tr>
              <tr>
                <td colspan="2">
                    <label>Email *
                        <input 
                        type="text" 
                        name="email" 
                        value={inputs.email || ""} 
                        onChange={handleChange}
                        required
                        />
                    </label>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                    <label>Subject
                        <input 
                        type="text" 
                        name="subject" 
                        value={inputs.subject || ""} 
                        onChange={handleChange}
                        />
                    </label>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                    <label>Message
                        <textarea row='30'
                        type="text" 
                        name="message" 
                        value={inputs.message || ""} 
                        onChange={handleChange}
                        />
                    </label>
                </td>
              </tr>
              <tr>
                  <td><DownloadButton name='submit' bgcolor='rgb(63, 63, 212)'/></td>
              </tr>
          </table>
      </form>
    )
  }

function Contact() {
    return (
        <div className='contact'>
            <div className='contact-heading'>
                <div><Square bgcolor="blue" position="absolute" left="140px" top="18px"/> Let's talk</div>
                <div className='contact-heading-bottom'>
                    <div><img src={emailIcon} alt="email" id='emailicon'/> cxcongcong@gmail.com</div>
                    <div><img src={phoneIcon} alt="phone" id='phoneicon'/>0410224620</div>
                </div>
            </div>
            <div className='contact-table'>
                <MyForm/>
            </div>
        </div>
    )
}

export default Contact;