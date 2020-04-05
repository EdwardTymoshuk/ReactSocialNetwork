import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import { authAPI } from '../api/api';
import { AppStateType } from './redux-store';

const SET_USER_DATA = 'react-socnet/auth/SET_USER_DATA';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

type ActionTypes = SetAuthUserDataActionType

type SetAuthUserDataActionPayloadType = {
    userId: number | null, 
    email: string | null,
    login: string | null, 
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload?: SetAuthUserDataActionPayloadType
} 

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA, payload: { userId, email, login, isAuth }
})

export const getAuthUserData = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Unknown error!'
        dispatch(stopSubmit('login', { _error: message }));
    }
}
export const logout = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => async (dispatch: Dispatch<ActionTypes>) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer