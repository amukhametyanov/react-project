
import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import astronautEmailImage from '../images/emails astronaut 1.png';  // Import the image


const Modal = ({ show, message, color }) => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        let timer, fadeTimer;

        setFade(false); // Reset the fade state

        if (show) {
            fadeTimer = setTimeout(() => {
                setFade(true); // Start the fade-out animation after 1 second
            }, 1000);

            timer = setTimeout(() => {
                setFade(false); // Reset the fade state for the next use
            }, 2000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
            if (fadeTimer) {
                clearTimeout(fadeTimer);
            }
        };
    }, [show]);

    const fadeClass = fade ? 'fade-out-modal' : '';

    if (!show) return null;

    return (
        <div className={`modal-overlay ${fadeClass}`}>
            <div className="modal-container">
                <h2 className="modal-title" style={{ color: color }}>
                    {message}
                    <span className="modal-icon">
                        <i className="fa-solid fa-envelopes-bulk"></i>
                    </span>
                </h2>
            </div>
        </div>
    );
};

const ContactUs = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [modalMessage, setModalMessage] = useState('Email Sent!');
    const [modalColor, setModalColor] = useState('#ffffff');  // Default text color
    const [buttonDisabled, setButtonDisabled] = useState(false);  
  
    const toggleModal = () => {
      if (!name || !email) {
        setModalMessage('Please fill in Name & Email fields');
        setModalColor('#ffc107');  // Set text color to #ffc107
      } else {
        setModalMessage('Email Sent!');
        setModalColor('#ffffff');  // Reset text color to default
        setButtonDisabled(true);   // Disable the button
      }
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);  // Hide the modal after 2 seconds
      }, 2000);
    };

    return (
        <section className="get-in-touch">
            <Modal show={showModal} message={modalMessage} color={modalColor} />

            <div id="contact"></div>
            <div className="contact-container">
                <div className="contact-image">
                    <img src={astronautEmailImage} alt="Contact Image" width="370" height="370" />
                </div>
                <div className="contact-form-container">
                    <div className="section-name">
                        <h3 className="skills-heading">
                            <span>Get in Touch</span>
                            <span className="for-icon">
                                <i className="fa-solid fa-envelopes-bulk animate__animated"></i>
                            </span>
                        </h3>
                        <img src={astronautEmailImage} alt="Get in Touch" className="get-in-touch-avatar" width="100" height="100" />
                    </div>
                    
                    <form className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                    </div>
                        <div className="form-row">
                            <div className="form-group">
                                <textarea name="message" id="message" placeholder="Message"></textarea>
                            </div>
                        </div>
                        
                        <div style={{ textAlign: "right" }}>
                            <button type="button" onClick={toggleModal} disabled={buttonDisabled}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
