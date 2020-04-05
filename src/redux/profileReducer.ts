import { usersAPI, profileAPI } from '../api/api'
import { PostsType, ProfileType } from '../types/types';
import { Dispatch } from 'redux';
import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
        posts: [
                { id: 1, message: "...", likeCount: 12 },
                { id: 2, message: "...", likeCount: 2 }
        ] as Array<PostsType>,
        profile: null as ProfileType | null,
        status: '',
        newPostText: ''
}

export type InitialStateType = typeof initialState;
const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
        switch (action.type) {
                case ADD_POST: {
                        let newPost = {
                                id: 5,
                                message: action.newPostText,
                                likeCount: 0
                        };
                        return {
                                ...state,
                                posts: [newPost, ...state.posts],
                                newPostText: ''
                        };
                }
                case SET_USER_PROFILE: {
                        return {
                                ...state,
                                profile: action.profile
                        };
                }
                case SET_STATUS: {
                        return {
                                ...state,
                                status: action.status
                        };
                }
                default:
                        return state;
        }
}

type ActionTypes = AddPostActionCreatorActionType | SetUserProfileActionType | SetStatusActionType

type AddPostActionCreatorActionType = {
        type: typeof ADD_POST
        newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({ type: ADD_POST, newPostText })

type SetUserProfileActionType = {
        type: typeof SET_USER_PROFILE
        profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetStatusActionType = {
        type: typeof SET_STATUS
        status: string | null
}
export const setStatus = (status: string | null): SetStatusActionType => ({ type: SET_STATUS, status })

export const getUserProfile = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => async (dispatch: Dispatch<ActionTypes>) => {
        let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
}
export const getStatus = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => async (dispatch: Dispatch<ActionTypes>) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
}
export const updateStatus = (status: string | null): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => async (dispatch: Dispatch<ActionTypes>) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
        }
}

export default profileReducer;