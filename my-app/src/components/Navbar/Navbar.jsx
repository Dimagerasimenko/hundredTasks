import React from 'react';
import cssModule from './Navbar.module.css';


function Navbar() {
    return (
        <nav className={cssModule.nav}>
            <ul>
                <li className={cssModule.item}>
                    <a href="/profile" className={`${cssModule.linkNav} ${cssModule.linkActive} ${cssModule.linkHover}`}>Profile</a>
                </li>
                <li className={cssModule.item}>
                    <a href="/dialogs" className={`${cssModule.linkNav} ${cssModule.linkActive} ${cssModule.linkHover}`}>Messages</a>
                </li>
                <li className={cssModule.item}>
                     <a href="/News" className={`${cssModule.linkNav} ${cssModule.linkActive} ${cssModule.linkHover}`}>News</a>
                </li>
                <li className={cssModule.item}>
                    <a href="Music" className={`${cssModule.linkNav} ${cssModule.linkActive} ${cssModule.linkHover}`}>Music</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;