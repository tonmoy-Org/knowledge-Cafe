import React from 'react';
import './Header.css';
import profile from '../images/profile.png';
const Header = () => {
    return (
        <div>
           <nav className='header'>
            <h3 className='title'>Knowledge Cafe</h3>
            <div className='header-info'>
                <img src={profile} alt="" />
            </div>
        </nav> 
        </div>
    );
};

export default Header;