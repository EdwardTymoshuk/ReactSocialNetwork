import React from 'react'
import { addPost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import {PostsType} from '../../../types/types'
import { AppStateType } from '../../../redux/redux-store'

type MapStateType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchType = {
    addPost: (newPostText: string) => void
}

let mapStateToProps = (state: AppStateType) => {
   return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect<MapStateType, MapDispatchType>(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer