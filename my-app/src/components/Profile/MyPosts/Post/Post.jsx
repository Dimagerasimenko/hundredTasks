import React from 'react';
import cssModule from './Post.module.css'

// Example of props



function Post(props) {
    return (
        <div className={cssModule.post}>
            <img src="#s" alt="img"/>
            <span className={cssModule.item}>{props.message} </span>
            <p> likes: {props.likesCount}</p>
        </div>
    );
}

export default Post;