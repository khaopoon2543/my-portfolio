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
                            A recent graduate in Language and Information Technology, looking for Full Stack Developer position to utilize my skills. I'm open to learning new things to improve my abilities. I would like to develop the best UX&UI for web applications. In the future, I want to develop web applications that will make studying enjoyable and accessible for everyone.
                        </p>
                    </div>
                    <br/>
                </div>
            </div>
            <div className="container about_container-under">
                <div className="about_content">
                    <div className="about_cards">
                        <div className="about_card">
                            <h5 className="about_card_header">
                                <FaGraduationCap id="about_card_icon"/> Education
                            </h5>
                            <div className="about_card_info">
                                <p><strong>Chulalongkorn University</strong> | 2018-2022</p>
                                <p><strong id="pink-text">Major</strong> : Language And Information Technology</p>
                                <p><strong id="pink-text">Minor</strong> : Japanese</p>
                                <p><strong id="pink-text">GPAX</strong> : 3.36</p>
                            </div>
                        </div>
                        <div className="about_card">
                            <h5 className="about_card_header">
                                <IoLanguage id="about_card_icon"/> Language
                            </h5>
                            <div className="about_card_info">
                                <p>English</p>
                                <p>Thai | Native</p>
                                <p>Japanese | N3 passed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;