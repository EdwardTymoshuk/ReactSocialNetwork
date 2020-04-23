import React from 'react'
import {reduxForm, Field, InjectedFormProps, WrappedFieldProps} from 'redux-form'
import { Textarea } from '../../common/formsControls/formsControls'
import { maxLength, FieldValidatorType } from '../../../utils/validators/validators'

const maxLength100 = maxLength(100);

  type AddMessageFieldType = {
    name: string
    placeholder?: string 
    type?: string
    component: React.FC<WrappedFieldProps> | React.ComponentClass | React.FC
    validate?: FieldValidatorType
  }

const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field<AddMessageFieldType> name={'newMessageBody'} 
                    component={Textarea}
                    placeholder='Enter your message...'
                    validate={maxLength100} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
