import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '24089d2d-5bfd-4176-9e33-279ad2e6b856'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}


export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe}).then(res => res.data)
    },
    logout() {
        return instance.delete<LoginResponseType>('auth/login').then(res => res.data)
    }
}