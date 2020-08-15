import React from 'react';
import cssModule from './Navbar.module.css';
import {NavLink} from "react-router-dom";


function Navbar() {
    return (
        <nav className={cssModule.nav}>
            <ul>
                <Item1 />

                <li className={cssModule.item}>
                    <NavLink to="/dialogs"
                             className={`${cssModule.linkNav} ${cssModule.linkActive} ${cssModule.linkHover}`}>Messages</NavLink>
                </li>
                <li className={cssModule.item}>
                    <NavLink to="/News"
                             className={`${cssModule.linkNav} ${cssModule.linkActive} ${cssModule.linkHover}`}>News</NavLink>
                </li>
                <li className={cssModule.item}>
                    <NavLink to="/Music"
                             className={`${cssModule.linkNav} ${cssModule.linkActive} ${cssModule.linkHover}`}>Music</NavLink>
                </li>
                <li className={cssModule.item}>
                    <NavLink to="/Setting"
                             className={`${cssModule.linkNav} ${cssModule.linkActive} ${cssModule.linkHover}`}>Setting</NavLink>
                </li>
            </ul>
        </nav>
    );
}

let pathData = [
    {id: 1, path: /}
]


function  Item1() {


    return (
        <li className={cssModule.item}>
            <NavLink to="/profile" className={`${cssModule.linkNav} ${cssModule.linkHover}`}
                     activeClassName={cssModule.linkActive}>
                Profile</NavLink>
        </li>

    )


}

export default Navbar;