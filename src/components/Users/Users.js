import React from 'react';
import classes from './Users.module.css'
import Paginator from '../common/paginator/Paginator';
import User from './User';

const Users = ({currentPage, totalItemsCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow}) => {
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