import React from 'react';
import cssModule from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

    let posts = props.postData.map((item) => {
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