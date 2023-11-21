import React, {useState, useRef} from 'react'
import { Navbar } from './assets/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import emailjs from '@emailjs/browser';
import { faFacebookF, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
    const [isActive, setIsActive] = useState(false);
    const [buttonText, setButtonText] = useState('Send');
    const [iconVisibility, setIcon] = useState('inline-block');
    const fromEmailRef = useRef();
    const subjectRef = useRef();
    const messageContentRef = useRef();
    const form = useRef();
    const myStyle = {
        display: iconVisibility,
    }
    const sendEmail = (e) => {
        e.preventDefault();
        setIsActive(true);
            setTimeout(() => {
                setIsActive(false);
                setButtonText('Sent!');
                setIcon('none');
                setTimeout(() =>{
                    setButtonText('Send');
                    setIcon('inline-block');
                    fromEmailRef.current.value = '';
                    subjectRef.current.value = '';
                    messageContentRef.current.value = '';
                }, 5000);
            }, 3000)
        emailjs.sendForm(
            'service_ejeiebo', 
            'template_wlxn0md', 
            form.current, 
            'EcNPzcPLGClLnpQgE'
            )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='contactme'>
        <Navbar />
        <div className='box-body'>  
            <div className='input-body'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='input-box'>
                        <label htmlFor="fromEmail">From:</label>
                        <input type="text" id='fromEmail' name="fromEmail" ref={fromEmailRef} placeholder='Enter your email' required />
                    </div>
                    <div className='input-box'>
                        <label htmlFor="subjectContent">Subject:</label>
                        <input type="text" id="subjectContent" name="subjectContent" ref={subjectRef} placeholder="Enter subject" required />
                    </div>
                    <div className='input-box'>
                        <label htmlFor="messageContent">Message:</label>
                        <textarea id="messageContent" name="messageContent" ref={messageContentRef} required></textarea>
                    </div>
                    <div className='sendButton'>
                        <button type='submit' id="sendBtn" className={`${isActive ? 'sending' : ''}`}><FontAwesomeIcon style={myStyle} className={`iconPaperPlane ${isActive ? 'sending' : ''}`} icon={faPaperPlane} />{buttonText}</button>
                        <a href="https://www.facebook.com/codeGehan" target='_black'><FontAwesomeIcon icon={faFacebookSquare} className='iconStyle fb' /></a>
                        <a href="https://www.instagram.com/codegehan/" target='_black'><FontAwesomeIcon icon={faInstagramSquare} className='iconStyle ig' /></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactMe




