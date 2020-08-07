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
    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sweta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Petya'},
        {id: 6, name: 'Pasha'}
    ];

    let messagesData = [
        {id: 1, message: 'How are You'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yo1'},
        {id: 4, message: 'Yo2'},
        {id: 5, message: 'Yo3'},
        {id: 6, message: 'Yo4'}
    ];

    return (
        <div className={cssModule.dialogsBox}>
            <div className={cssModule.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />

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
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )

};

export default Dialogs;