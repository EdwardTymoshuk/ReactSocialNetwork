import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers(
            [
                {id:1, photoUrl: 'https://icon-library.net/images/penis-icon-16x16/penis-icon-16x16-10.jpg', followed: true, fullName: 'Filip', status: 'Jebac policje', location: {city: 'Zalupa', country: 'Russia'}},
                {id:2, photoUrl: 'https://icon-library.net/images/penis-icon-16x16/penis-icon-16x16-10.jpg', followed: true, fullName: 'Nikolay', status: 'Sharmanakaaaaa', location: {city: 'Mlynary', country: 'Poland'}},
                {id:3, photoUrl: 'https://icon-library.net/images/penis-icon-16x16/penis-icon-16x16-10.jpg', followed: false, fullName: 'Maksim', status: 'Jebac stare rury', location: {city: 'Zasransk', country: 'Ukraine'}}
            ]
        )
    }
    return (
    <div>
        {
            props.users.map(item => <div key={item.id}>
                    <span>
                        <div>
                            <img src={item.photoUrl} className={classes.userPhoto} />
                        </div>
                        <div>
                            {item.followed 
                                ? <button onClick={() => {props.unfollow(item.id)}}>Unfollow</button> 
                                : <button onClick={() => {props.follow(item.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{item.fullName}</div>
                            <div>{item.status}</div>
                        </span>
                        <span>
                            <div>{item.location.city}</div>
                            <div>{item.location.country}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
    )
}

export default Users;