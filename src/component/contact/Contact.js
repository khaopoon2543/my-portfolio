import React from 'react'
import './contact.css'
import { FiMail } from 'react-icons/fi';
import { RiMessengerLine } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';

function Contact() {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>📬 Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_card">
                    <div className="contact_card_header">
                        <FiMail className="contact_card_icon"/>
                        <h5>Email</h5>
                        <p>khaopoon2543@gmail.com</p>
                    </div>
                    <div className="contact_card_info">
                        <a href="mailto: khaopoon2543@gmail.com" target="_blank" rel="noreferrer">
                            send a message
                        </a> 
                    </div>
                </div>
                <div className="contact_card">
                    <div className="contact_card_header">
                        <RiMessengerLine className="contact_card_icon"/>
                        <h5>Messenger</h5>
                        <p>Kaopun Yathip</p>
                    </div>
                    <div className="contact_card_info">
                        <a href="https://www.facebook.com/profile.php?id=100005184785636" target="_blank" rel="noreferrer">
                            send a message
                        </a> 
                    </div>
                </div>
                <div className="contact_card">
                    <div className="contact_card_header">
                        <FiPhone className="contact_card_icon"/>
                        <h5>Phone</h5>
                        <p>099-065-5995</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;