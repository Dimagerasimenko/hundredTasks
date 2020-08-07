import React from 'react'
import cssModule from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



function DialogItem(props) {
    let path = '/dialogs/' + props.id;

    return (
        <div className={cssModule.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={cssModule.message}>{props.message}</div>
    )

}

const Dialogs = (props) => {
    return (
        <div className={cssModule.dialogsBox}>
            <div className={cssModule.dialogItems}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Sweta' id='2'/>
                <DialogItem name='Sasha' id='3'/>
                <DialogItem name='Vasya' id='4'/>
                <DialogItem name='Petya' id='5'/>
                <DialogItem name='Pasha' id='6'/>

                {/*<div className={cssModule.dialog}>
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
            </div>*/}
        </div>
    <div className={cssModule.dialogsMessages}>
        <Message message='hi'/>
        <Message message='hello'/>
        <Message message='yo'/>
    </div>
</div>
)

};

export default Dialogs;