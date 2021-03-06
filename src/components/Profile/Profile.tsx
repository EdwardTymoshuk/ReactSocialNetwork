import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type PropsType = {
    
}

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <h1>My posts:</h1>
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;