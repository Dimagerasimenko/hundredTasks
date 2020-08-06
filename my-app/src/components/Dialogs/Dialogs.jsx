import React from 'react'
import cssModule from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={cssModule.dialogsBox}>
            <div className={cssModule.dialogItems}>
                <div className={cssModule.dialog}>
                    <NavLink to='/dialogs/1'>dima</NavLink>
                </div>
                <div className={cssModule.dialog}>
                    <NavLink to='/dialogs/2'>sweta</NavLink>
                </div>
                <div className={cssModule.dialog}>
                    <NavLink to='/dialogs/3'>sasha</NavLink>
                </div>
                <div className={cssModule.dialog}>
                    <NavLink to='/dialogs/4'>vasya</NavLink>
                </div>
                <div className={cssModule.dialog}>
                    <NavLink to='/dialogs/5'>petya</NavLink>
            </div>
            <div className={cssModule.dialog}>
                <NavLink to='/dialogs/6'>pasha</NavLink>
            </div>
        </div>
    <div className={cssModule.dialogsMessages}>
        <div className={cssModule.message}>hi</div>
        <div className={cssModule.message}>bye</div>
        <div className={cssModule.message}>how are you</div>
    </div>
</div>
)

};

export default Dialogs;