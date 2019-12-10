import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
if (!props.profile) { return <Preloader /> }
    return (
        <div >
           
            <div className={classes.descriptionBlock} >
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>Name: {props.profile.fullName}</div>
                <div>Id: {props.profile.userId}</div>
                <div>About me: {props.profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;