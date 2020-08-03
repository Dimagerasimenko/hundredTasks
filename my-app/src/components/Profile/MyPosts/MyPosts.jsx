import React from 'react';
import cssModule from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div className={cssModule.posts}>
            <div>
                <h2>My Posts</h2>
            </div>
            <div>
                <p>New post</p>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;