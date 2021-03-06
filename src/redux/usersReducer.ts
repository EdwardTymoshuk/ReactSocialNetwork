import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/objectHelpers'
import { UsersType } from '../types/types'
import { AppStateType } from './redux-store'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5 as number,
    totalItemsCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false,
    followingInProgress: [] as Array<number> //Array of users id`s
}

export type InitialStateType = typeof initialState

let usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalItemsCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

type ActionTypes = FollowSuccessType | UnfollowSuccessType | SetUsersType | SetCurrentPage | SetTotalItemsCountType
| ToggleIsFetching | ToggleFollowingProgressType

type FollowSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({ type: FOLLOW, userId })

type UnfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({ type: UNFOLLOW, userId })

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersType => ({ type: SET_USERS, users })

type SetCurrentPage = {
    type: typeof SET_CURRENT_PAGE 
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPage => ({ type: SET_CURRENT_PAGE, currentPage })

type SetTotalItemsCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number 
}
export const setTotalItemsCount = (totalItemsCount: number): SetTotalItemsCountType => ({ type: SET_TOTAL_USERS_COUNT, count: totalItemsCount })

type ToggleIsFetching = {
    type: typeof TOGGLE_IS_FETCHING 
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetching => ({ type: TOGGLE_IS_FETCHING, isFetching })

type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS 
    isFetching: boolean 
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (currentPage: number, pageSize: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalItemsCount(data.totalCount))
    }
}
const followUnfollowFlow = async (dispatch: Dispatch<ActionTypes>, userId: number, apiMethod: any, actionCreator: (userId: number) => FollowSuccessType | UnfollowSuccessType) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await apiMethod(userId)
        if (response.data.resultCode == 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
export const follow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unfollow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}

export default usersReducer