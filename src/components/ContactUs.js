import React from 'react';
import './ContactUs.css';
import astronautEmailImage from '../images/emails astronaut 1.png';  // Import the image

const ContactUs = () => {
    return (
        <section className="get-in-touch">
            <div id="contact"></div>
            <div className="contact-container">
                <div className="contact-image">
                    <img src={astronautEmailImage} alt="Contact Image" />
                </div>
                <div className="contact-form-container">
                    <div className="section-name">
                        <h3 className="skill-heading">
                            <span>Get in Touch</span>
                            <span className="for-icon">
                                <i className="fa-solid fa-envelopes-bulk animate__animated"></i>
                            </span>
                        </h3>
                        <img src={astronautEmailImage} alt="Get in Touch" className="get-in-touch-avatar" />
                    </div>
                    
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <textarea name="message" id="message" placeholder="Message"></textarea>
                            </div>
                        </div>
                        
                        <div style={{ textAlign: "right" }}>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
