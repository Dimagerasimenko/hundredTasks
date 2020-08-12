import React from 'react'
import cssModule from './Dialogs.module.css';
import DialogItem from "./DialogItems/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsComponent = props.dialogsData.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>
    });

    let messageComponent = props.messagesData.map((item) => {
        return <Message message={item.message}/>
    });

    return (
        <div className={cssModule.dialogsBox}>
            <div className={cssModule.dialogItems}>
                {dialogsComponent}
            </div>
            <div className={cssModule.dialogsMessages}>
                {messageComponent}
            </div>
        </div>
    )

};

export default Dialogs;