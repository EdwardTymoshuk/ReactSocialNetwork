import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {getUserProfile, getStatus, updateStatus} from '../../redux/profileReducer'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import { compose } from 'redux'
import { ProfileType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
    profile: ProfileType
    status: string
    authorisedUserId: string | undefined
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string | undefined) => void
    getStatus: (userId: string | undefined) => void
    updateStatus: (status: string | null) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<Params>
type Params = {
    userId: string | undefined
}
class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!this.props.match.params.userId) {
            userId = this.props.authorisedUserId
            if (!this.props.authorisedUserId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
        this.refreshProfile()
        }
    }
    render() {
        return (
            <Profile {...this.props} 
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    // withAuthRedirect
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
    )(ProfileContainer)