import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { AddMessageFormRedux } from './Message/AddMessageForm';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(item => <DialogItem name={item.name} id={item.id} />)
    let messagesElements = state.messages.map(item => <Message message={item.message}/>)
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}              
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}
export default Dialogs;
