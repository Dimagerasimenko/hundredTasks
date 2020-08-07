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

    let dialogsComponent = dialogsData.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>
    });

    let messageComponent = messagesData.map((item) => {
        return <Message message={item.message}/>
    });

    return (
        <div className={cssModule.dialogsBox}>
            <div className={cssModule.dialogItems}>
                {dialogsComponent};
            </div>
            <div className={cssModule.dialogsMessages}>
                {messageComponent};
            </div>
        </div>
    )

};

export default Dialogs;