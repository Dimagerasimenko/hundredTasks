import React from 'react';
import cssModule from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let postData = [
        {id: 1, message: 'How are You', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15}
    ];

    return (
        <div className={cssModule.posts}>
            <div>
                <h2>My Posts</h2>
            </div>
            <div>
                <p>New post</p>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>

            </div>
        </div>
    );
}

export default MyPosts;