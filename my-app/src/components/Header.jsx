import React from 'react';
import cssModule from './Header.module.css';

function Header() {
    return (
        <header className={cssModule.header}>
            <img src='https://lendmeyourear.net/images/how-to-embed-silverlight-using-javascript/cover.jpg'
                 alt="img"></img>
        </header>
    );
}

export default Header;