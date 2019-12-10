import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import { required, maxLength } from '../../../utils/validators/validators';
import { Textarea } from '../../common/formsControls/formsControls';

const maxLength10 = maxLength(10);

const AddNewPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' component={Textarea} placeholder='What`s new ?'
                validate={[required, maxLength10]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = (props) => {
    let postsElements = props.posts.map(item => <Post message={item.message} likeCount={item.likeCount} />)
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
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
export default MyPosts;