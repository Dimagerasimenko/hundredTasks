import React from 'react';
import {NavLink} from 'react-router-dom';
import cssModule from './DialogItems.module.css'


function DialogItem(props) {
    let path = '/dialogs/' + props.id;

    return (
        <div className={cssModule.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;