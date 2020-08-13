import React from 'react';
import cssModule from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {



    return (
        <div className={cssModule.content}>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData}/>
        </div>
    );
}

export default Profile;