import React from 'react';
import classes from './Users.module.css'
import Paginator from '../common/paginator/Paginator';
import User from './User';
import {UsersType} from '../../types/types';

type PropsType = {
    currentPage: number, 
    totalItemsCount: number, 
    pageSize: number, 
    onPageChanged: (pageNumber: number) => void, 
    users: Array<UsersType>, 
    followingInProgress: Array<number>, 
    follow: (userId: number) => void, 
    unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({currentPage, totalItemsCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow, ...props}) => {
    return (
    <div> 
    <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} pageSize={pageSize}/>
    {
        users.map(item => <User user={item}
                                key={item.id}
                                followingInProgress={followingInProgress}
                                unfollow={unfollow}
                                follow={follow}
                                />
        )
        }
</div>
    )
}
export default Users;