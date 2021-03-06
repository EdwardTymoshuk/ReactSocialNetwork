import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';
import { ProfileType } from '../../../types/types';

type PropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string

    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<PropsType> = ({isOwner, profile, updateStatus, status}) => {
if (!profile) { 
    return <Preloader />
}
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt=""/>
                {isOwner && <input type={"file"} />}
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <div>Name: {profile.fullName}</div>
                <div>Id: {profile.userId}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;