import React from 'react';
import cssModule from './Post.module.css'

function Post() {
    return (
        <div className={cssModule.post}>
            <img src="#s" alt="img"/>
            <span className={cssModule.item}>Post1</span>
        </div>
    );
}

export default Post;