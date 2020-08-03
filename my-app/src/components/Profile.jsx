import React from 'react';
import cssModule from './Profile.module.css'

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
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;