import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { Textarea } from '../../common/formsControls/formsControls'
import { maxLength } from '../../../utils/validators/validators'

const maxLength100 = maxLength(100);

type PropsType = {
    handleSubmit: any
}

const AddMessageForm: React.FC<PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'} 
                    component={Textarea}
                    placeholder='Enter your message...'
                    validate={ [maxLength100]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<{}>({form: 'dialogAddMessageForm'})(AddMessageForm)
