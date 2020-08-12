import React from 'react';
import cssModule from './Message.module.css'

function Message(props) {
    return (
        <div className={cssModule.message}>{props.message}</div>
    )
}

export default Message;