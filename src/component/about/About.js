import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';

function About() {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About me 🍮</h2>

            <div className="container about_container top">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={ME} alt="me" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_script">
                        <p>
                        I would like to develop web application for bringing the best user experience and beautiful interface.
                        I'm currently practicing JavaScript React and interesting about ReactNative. In the future,
                        I would like to create web or mobile applications that benefit humanity.
                        </p>
                    </div>
                    <br/>
                </div>
            </div>
            <div className="container about_container under">
                <div className="about_content"></div>
                <div className="about_content">
                    <div className="about_cards">
                        <div className="about_card">
                            <h5 className="about_card_header">
                                <FaGraduationCap id="about_card_icon"/> Education
                            </h5>
                            <p>Chulalongkorn University | 2018-2022</p>
                            <p>Major : Language And Information Technology</p>
                            <p>Minor : Japanese</p>
                            <p>GPAX : 3.36</p>
                        </div>
                        <div className="about_card">
                            <h5 className="about_card_header">
                                <IoLanguage id="about_card_icon"/> Language
                            </h5>
                            <p>Japanese (N3 passed)</p>
                            <p>English</p>
                            <p>Thai</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;