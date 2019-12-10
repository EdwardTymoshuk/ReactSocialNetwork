import React from 'react';
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg';
import {NavLink} from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
    <div>
    <div className={classes.pages}>

        {pages.map(item => 
            { return <span className={props.currentPage === item && classes.selectedPage}
                                    onClick={(e) => props.onPageChanged(item)}>{item}</span>})}
    </div>
    {
        props.users.map(item => <div key={item.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + item.id}>
                        <img src={item.photos.small != null ? item.photos.small : userPhoto}
                             className={classes.userPhoto} 
                        />
                        </NavLink>
                    </div>
                    <div>
                        {item.followed
                            ? 
                            <button disabled={props.followingInProgress.some(id => id === item.id)} 
                                    onClick={() => {props.unfollow(item.id)}}>Unfollow
                            </button> 
                            : 
                            <button disabled={props.followingInProgress.some(id => id === item.id)} 
                                    onClick={() => {props.follow(item.id)}}>Follow
                                </button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{item.name}</div>
                        <div>{item.status}</div>
                    </span>
                    <span>
                        <div>item.location.city</div>
                        <div>item.location.country</div>
                    </span>
                </span>
            </div>
        )
    }
</div>
    )
}

export default Users;