import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-brand'>{props.brand}</div>
            </div>
        </header>
    );
}

export default Header;
