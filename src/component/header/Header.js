import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials';
import HeaderEmail from './HeaderEmail';
import ME from '../../assets/me2.png'; /* mikochan2.png */
import ShapeWawes from '../../assets/shape-wawes.svg';
import ShapeCircle from '../../assets/shape-circle.svg';

function Header() {
    return (
        <header>
            <div class="circle left"></div>
            <div class="circle right"></div>

            <div className="container header_container">
                <h5 className="tag">Hello I'm</h5>
                <h1 className="name">Yathip <br/> Charoenvaravut</h1>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <div className="shape-waves">
                    <img src={ShapeWawes} alt="shape-wawes" />
                </div>
                <div className="shape-circle">
                    <img src={ShapeCircle} alt="shape-circle" />
                </div>
                <HeaderSocials />
                <HeaderEmail />
            </div>

            
        </header>
    )
}

export default Header;