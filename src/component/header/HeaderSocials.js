import React from 'react'
import './header.css'
import { FiGithub } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { RiFacebookCircleLine } from 'react-icons/ri';

function HeaderSocials() {
    return (
        <div className="header_socials">
            <a href="https://github.com/khaopoon2543" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100005184785636" target="_blank" rel="noreferrer">
                <RiFacebookCircleLine />
            </a>
            <a href="mailto: kaopun.yathip@gmail.com" target="_blank" rel="noreferrer">
                <FiMail />
            </a> 
        </div>
    )
}

export default HeaderSocials;