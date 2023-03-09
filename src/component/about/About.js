import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';

function LanguageFlag(country) {
        return   <img src={require(`../../assets/${country}.svg`)} alt={country}/>       
}

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
                            <span style={{fontSize:25}}> I'm </span>
                            a recent graduate in 
                            <span id="pink-text"> Language and Information Technology </span> 
                            looking for a 
                            <span id="pink-text"> Frontend or Web Developer </span>
                            position where I can put my talents to use. I'm willing to learn new things in order to improve my skills and create web applications with the best user experience and user interface for each project.
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
                                <p style={{marginBottom:10}}><strong>Chulalongkorn University</strong> | 2018-2022</p>
                                <p><strong>Faculty of Arts</strong></p>
                                <p><strong>Major :</strong> Language And Information Technology</p>
                                <p><strong>Minor :</strong> Japanese</p>
                                <p><strong>GPAX :</strong> 3.36</p>
                            </div>
                        </div>
                        <div className="about_card">
                            <h5 className="about_card_header">
                                <IoLanguage id="about_card_icon"/> Language
                            </h5>
                            <div className="about_card_info">
                                <p>Thai | Native</p>
                                <p>English</p>
                                <p>Japanese | N3 passed</p>

                                <div className="lang_flag">
                                    {LanguageFlag("thai")} {LanguageFlag("uk")} {LanguageFlag("japan")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;