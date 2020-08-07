import React from 'react';
import cssModule from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let postData = [
        {id: 1, message: 'How are You', likesCount: 12},
        {id: 2, message: 'How are You', likesCount: 12},
        {id: 3, message: 'How are You', likesCount: 12},
        {id: 4, message: 'How are You', likesCount: 12},
        {id: 5, message: 'How are You', likesCount: 12},
        {id: 6, message: 'How are You', likesCount: 12},
        {id: 7, message: 'It\'s my first post', likesCount: 15}
    ];

    let posts = postData.map((item) => {
        return <Post message={item.message} likesCount={item.likesCount} />
    });

    return (
        <div className={cssModule.posts}>
            <div>
                <h3>My Post</h3>
            </div>
            <div>
                <p>New posts</p>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;