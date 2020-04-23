import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import AddNewPostFormRedux from './AddNewPostForm'
import { PostsType } from '../../../types/types';

type PropsType = {
    posts: Array<PostsType>
    newPostText: string

    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postsElements = props.posts.map(item => <Post message={item.message} likeCount={item.likeCount} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={classes.postBlock}>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts