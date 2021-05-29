import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo"/>
            </div>
        </header>
    );
};

export default Header;