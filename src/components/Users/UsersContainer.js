import React from 'react';
import Users from './Users';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: userId => dispatch(followAC(userId)),
        unfollow: userId => dispatch(unfollowAC(userId)),
        setUsers: users => dispatch(setUsersAC(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);