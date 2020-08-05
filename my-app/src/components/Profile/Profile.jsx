import React from 'react';
import cssModule from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div className={cssModule.content}>
            <div>
                <img
                    src="https://lendmeyourear.net/images/how-to-embed-silverlight-using-javascript/cover.jpg"
                    alt='img'></img>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;