import React from 'react'
import classes from './Post.module.css'

type PropsType = {
    message: string
    likeCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.item}>
                <div className={classes.postImage}><img src="https://img.freepik.com/free-vector/modern-hand-drawn-astronaut-character_23-2147900290.jpg?size=338&ext=jpg"></img></div> 
                <div className={classes.postMessage}>{props.message}</div> 
            </div>
            <div className={classes.postLikes}>Likes: {props.likeCount}</div>
        </div>
    )
}
export default Post