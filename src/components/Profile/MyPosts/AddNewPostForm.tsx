import React from 'react'
import { maxLength, required, FieldValidatorType } from '../../../utils/validators/validators'
import { Field, reduxForm, InjectedFormProps, WrappedFieldProps } from 'redux-form'
import { Textarea } from '../../common/formsControls/formsControls'

const maxLength10 = maxLength(10)

type NewPostFieldType = {
    name: string
    placeholder?: string 
    type?: string
    component: React.FC<WrappedFieldProps> | React.ComponentClass | React.FC
    validate?: FieldValidatorType
  }

const AddNewPostForm: React.FC<InjectedFormProps<NewPostFieldType>> = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field<NewPostFieldType> name='newPostText' component={Textarea} placeholder='What`s new ?'
                validate={[required, maxLength10]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default AddNewPostFormRedux